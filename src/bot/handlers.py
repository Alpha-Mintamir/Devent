from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, ReplyKeyboardMarkup, KeyboardButton
from telegram.ext import ContextTypes, ConversationHandler
from config.settings import CHANNEL_ID
from config.logging_config import logger
from .formatting import format_message

# Define states
SELECTING_DEV_TYPE = 1
SELECTING_TOPIC = 2
TYPING_MESSAGE = 3
CHOOSING_ANONYMITY = 4

# Define topics
TOPICS = {
    "bug": ("🐛 Bug Fight", "BugFight"),
    "feature": ("✨ New Feature", "NewFeature"),
    "learning": ("📚 Learning Journey", "LearningJourney"),
    "success": ("🎉 Success Story", "SuccessStory"),
    "tools": ("🔧 Tools & Tech", "ToolsTech"),
    "team": ("👥 Team Stuff", "TeamStuff"),
    "other": ("💭 Other", "DevLife")
}

# Define developer types with selection tracking
DEV_TYPES = {
    "frontend": "Frontend Developer",
    "backend": "Backend Developer",
    "fullstack": "Full Stack Developer",
    "mobile": "Mobile Developer",
    "devops": "DevOps Engineer",
    "data": "Data Engineer/Scientist",
    "game": "Game Developer",
    "other": "Software Developer"
}

# Update DEV_TYPES to include a skip option message
DEFAULT_DEV = "Developer"  # Default text when skipped

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    logger.info(f"User {user.id} ({user.first_name}) started the bot")
    
    keyboard = [
        [InlineKeyboardButton("📝 Post a Vent", callback_data="start_post")],
        [InlineKeyboardButton("❓ Help", callback_data="start_help")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "👋 Welcome to Devent!\n\n"
        "I'm here to help developers share their thoughts, frustrations, and celebrations "
        "with the community.\n\n"
        "*Join our channel:*\n"
        "[@dev_vent](https://t.me/dev_vent)\n\n"
        "What would you like to do?",
        reply_markup=reply_markup,
        parse_mode='Markdown',
        disable_web_page_preview=True
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    logger.info(f"User {user.id} requested help")
    
    help_text = (
        "🤖 *Devent Bot Help*\n\n"
        "Here are the available commands:\n\n"
        "📝 */post* - Start posting a new dev vent\n"
        "❓ */help* - Show this help message\n\n"
        "To post a vent:\n"
        "1. Use /post command or click 'Post a Vent'\n"
        "2. Select your developer type\n"
        "3. Select a topic for your vent\n"
        "4. Type your message\n"
        "5. Choose to post anonymously or with your name\n\n"
        "Your message will be shared in our community channel!"
    )
    await update.message.reply_text(help_text, parse_mode='Markdown')

async def show_dev_type_selection(message, selected_types=None):
    user = message.from_user
    logger.info(f"Showing developer type selection to user {user.id}")
    
    if selected_types is None:
        selected_types = set()
    
    keyboard = []
    row = []
    
    # Create buttons for each dev type with selection indicator
    for dev_type, display_name in DEV_TYPES.items():
        prefix = "✅ " if dev_type in selected_types else ""
        row.append(InlineKeyboardButton(
            f"{prefix}{display_name}", 
            callback_data=f"devtype_{dev_type}"
        ))
        if len(row) == 2:
            keyboard.append(row)
            row = []
    if row:
        keyboard.append(row)
    
    # Add Next button if selections made, otherwise Skip
    keyboard.append([
        InlineKeyboardButton(
            "Next ➡️" if selected_types else "Skip ⏩", 
            callback_data="devtype_next"
        )
    ])
    
    reply_markup = InlineKeyboardMarkup(keyboard)
    text = (
        "What type of developer are you? (Multiple selections allowed)\n"
        f"Selected: {', '.join(DEV_TYPES[t] for t in selected_types) or 'None'}"
    )
    
    # Check if we're updating an existing message or sending a new one
    if hasattr(message, 'edit_message_text'):
        # This is a callback query message
        await message.edit_message_text(text=text, reply_markup=reply_markup)
    else:
        # This is a new message
        await message.reply_text(text=text, reply_markup=reply_markup)
    
    return SELECTING_DEV_TYPE

async def show_topic_selection(message, selected_topics=None):
    if selected_topics is None:
        selected_topics = set()
    
    keyboard = []
    row = []
    
    # Create buttons for each topic with selection indicator
    for topic_id, (topic_display, _) in TOPICS.items():
        prefix = "✅ " if topic_id in selected_topics else ""
        row.append(InlineKeyboardButton(
            f"{prefix}{topic_display}", 
            callback_data=f"topic_{topic_id}"
        ))
        if len(row) == 2:
            keyboard.append(row)
            row = []
    if row:
        keyboard.append(row)
    
    # Add Next button if selections made, otherwise Skip
    keyboard.append([
        InlineKeyboardButton(
            "Next ➡️" if selected_topics else "Skip ⏩", 
            callback_data="topic_next"
        )
    ])
    
    reply_markup = InlineKeyboardMarkup(keyboard)
    text = (
        "Select topics for your vent (Multiple selections allowed)\n"
        f"Selected: {', '.join(TOPICS[t][0] for t in selected_topics) or 'None'}"
    )
    
    # Check if we're updating an existing message or sending a new one
    if hasattr(message, 'edit_message_text'):
        # This is a callback query message
        await message.edit_message_text(text=text, reply_markup=reply_markup)
    else:
        # This is a new message
        await message.reply_text(text=text, reply_markup=reply_markup)
    
    return SELECTING_TOPIC

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Handle message input during conversation
    if 'dev_types' not in context.user_data:
        return await show_dev_type_selection(update.message)
    if 'topics' not in context.user_data:
        return await show_topic_selection(update.message)
    
    logger.info(f"User {update.effective_user.id} submitted message text")
    context.user_data['message'] = update.message.text
    
    keyboard = [
        [
            InlineKeyboardButton("🕶 Post Anonymously", callback_data="anonymous"),
            InlineKeyboardButton("👤 Post with Name", callback_data="named")
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "How would you like to post this message?",
        reply_markup=reply_markup
    )
    return CHOOSING_ANONYMITY

async def handle_choice(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    user = update.effective_user
    await query.answer()
    
    try:
        if query.data == "start_post":
            return await show_dev_type_selection(query.message)
        elif query.data == "start_help":
            help_text = (
                "🤖 *Devent Bot Help*\n\n"
                "To post a vent:\n"
                "1. Select your developer type\n"
                "2. Select a topic for your vent\n"
                "3. Type your message\n"
                "4. Choose to post anonymously or with your name\n\n"
                "Your message will be shared in our community channel!"
            )
            await query.message.edit_text(help_text, parse_mode='Markdown')
            return ConversationHandler.END
        
        if query.data.startswith("devtype_"):
            dev_type = query.data.replace("devtype_", "")
            if dev_type == "next":
                context.user_data['dev_types'] = context.user_data.get('selected_dev_types', set())
                return await show_topic_selection(query.message)
            
            # Toggle selection
            selected_types = context.user_data.get('selected_dev_types', set())
            if dev_type in selected_types:
                selected_types.remove(dev_type)
            else:
                selected_types.add(dev_type)
            context.user_data['selected_dev_types'] = selected_types
            
            return await show_dev_type_selection(query.message, selected_types)
            
        elif query.data.startswith("topic_"):
            topic = query.data.replace("topic_", "")
            if topic == "next":
                context.user_data['topics'] = context.user_data.get('selected_topics', set())
                await query.edit_message_text(
                    "📝 Please type your dev-related message.\n\n"
                    "It can be about:\n"
                    "- Code frustrations\n"
                    "- Celebrations\n"
                    "- Learning experiences\n"
                    "- Tech observations"
                )
                return TYPING_MESSAGE
            
            # Toggle selection
            selected_topics = context.user_data.get('selected_topics', set())
            if topic in selected_topics:
                selected_topics.remove(topic)
            else:
                selected_topics.add(topic)
            context.user_data['selected_topics'] = selected_topics
            
            return await show_topic_selection(query.message, selected_topics)
        
        # Handle anonymous/named choice
        message = context.user_data.get('message', '')
        dev_types = context.user_data.get('dev_types', set())
        topics = context.user_data.get('topics', set())
        
        # Format the message with improved structure
        dev_types_text = ", ".join(DEV_TYPES[t] for t in dev_types) or "Developer"
        hashtags = " ".join(f"#{TOPICS[t][1]}" for t in topics)
        
        header = (
            "👋 *Hey Devs!*\n"
            f"I am a *{dev_types_text}*\n"
            "I need to vent...\n"
            "━━━━━━━━━━━━━━━\n\n"
        )
        
        if query.data == "named":
            user_info = f"*{user.first_name}*"
            if user.username:
                user_info += f" (@{user.username})"
            author_line = f"From: {user_info}\n\n"
        else:
            author_line = "*Anonymous Developer* writes:\n\n"
        
        formatted_message = (
            f"{header}"
            f"{author_line}"
            f"{message}\n\n"
            f"━━━━━━━━━━━━━━━\n"
            f"{hashtags}"
        )
        
        # Send to channel
        await context.bot.send_message(
            chat_id=CHANNEL_ID,
            text=formatted_message,
            parse_mode='Markdown'
        )
        
        logger.info(f"Successfully posted message to channel for user {user.id}")
        
        # Create inline keyboard for posting again
        keyboard = [
            [InlineKeyboardButton("📝 Post Another Vent", callback_data="start_post")],
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        
        success_message = (
            "✅ Your message has been posted!\n\n"
            "*Join our channel to see your post:*\n"
            "[@dev_vent](https://t.me/dev_vent)\n\n"
            "Want to share another thought? Click below 👇"
        )
        
        await query.edit_message_text(
            text=success_message,
            reply_markup=reply_markup,
            parse_mode='Markdown',
            disable_web_page_preview=True
        )
        
        # Clear user data
        context.user_data.clear()
        return ConversationHandler.END
        
    except Exception as e:
        logger.error(f"Error handling choice for user {user.id}: {str(e)}", exc_info=True)
        await query.edit_message_text("❌ Sorry, something went wrong. Please try again.")
        return ConversationHandler.END
