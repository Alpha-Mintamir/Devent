from telegram.ext import Application, CommandHandler, MessageHandler, filters, ConversationHandler, CallbackQueryHandler
from bot.handlers import (
    start, help_command, handle_message, handle_choice,
    SELECTING_DEV_TYPE, SELECTING_TOPIC, TYPING_MESSAGE, CHOOSING_ANONYMITY
)
from config.settings import BOT_TOKEN
from config.logging_config import logger

def main():
    logger.info("Starting Devent bot...")
    
    try:
        app = Application.builder().token(BOT_TOKEN).build()
        logger.info("Bot application built successfully")
        
        # Add command handlers
        app.add_handler(CommandHandler('start', start))
        app.add_handler(CommandHandler('help', help_command))
        
        # Add conversation handler with updated states
        conv_handler = ConversationHandler(
            entry_points=[
                MessageHandler(filters.TEXT, handle_message),
                CallbackQueryHandler(handle_choice)
            ],
            states={
                SELECTING_DEV_TYPE: [CallbackQueryHandler(handle_choice)],
                SELECTING_TOPIC: [CallbackQueryHandler(handle_choice)],
                TYPING_MESSAGE: [MessageHandler(filters.TEXT, handle_message)],
                CHOOSING_ANONYMITY: [CallbackQueryHandler(handle_choice)]
            },
            fallbacks=[],
        )
        
        app.add_handler(conv_handler)
        logger.info("Conversation handler configured and added")
        
        # Start the bot
        logger.info("Starting bot polling...")
        app.run_polling()
        
    except Exception as e:
        logger.error(f"Error starting bot: {str(e)}", exc_info=True)
        raise

if __name__ == '__main__':
    main()
