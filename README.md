# Devent Bot 🤖

A Telegram bot that allows developers to share their thoughts, frustrations, and celebrations with the community. Post your dev-related vents anonymously or with your name!

## Features 🌟

- Multiple developer type selection
- Topic categorization
- Anonymous or named posting
- Persistent menu buttons
- Channel integration
- Hashtag categorization

## Commands 📝

- `/start` - Start the bot and show the main menu
- `/help` - Show help information

## Usage 🚀

1. Start the bot with `/start`
2. Click "📝 Post a Vent" to share your thoughts
3. Select your developer type(s)
4. Choose relevant topic(s)
5. Write your message
6. Choose to post anonymously or with your name

## Message Format 📋

Messages are posted to the channel in this format:


This CSS is driving me crazy! Why won't this div just center properly?
━━━━━━━━━━━━━━━


## Developer Types 👨‍💻

- Frontend Developer
- Backend Developer
- Full Stack Developer
- Mobile Developer
- DevOps Engineer
- Data Engineer/Scientist
- Game Developer
- Software Developer

## Topics 📌

- 🐛 Bug Fight
- ✨ New Feature
- 📚 Learning Journey
- 🎉 Success Story
- 🔧 Tools & Tech
- 👥 Team Stuff
- 💭 Other

## Setup 🛠

1. Clone the repository
```bash
git clone https://github.com/Alpha-mintamir/devent-bot.git
cd devent-bot
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install -r requirements.txt
```

4. Create a `.env` file with your credentials
```bash
BOT_TOKEN=your_bot_token_here
CHANNEL_ID=@your_channel_name
```

5. Run the bot
```bash
python src/main.py
```

## Deployment on Railway 🚂

1. Fork this repository
2. Create a new project on [Railway](https://railway.app/)
3. Connect your GitHub repository
4. Add environment variables:
   - `BOT_TOKEN`
   - `CHANNEL_ID`
5. Deploy!

## Project Structure 📁

```
devent-bot/
├── src/
│   ├── bot/
│   │   ├── __init__.py
│   │   ├── handlers.py
│   │   └── formatting.py
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   └── logging_config.py
│   └── main.py
├── logs/
├── .env
├── .gitignore
├── Procfile
├── README.md
├── railway.json
├── requirements.txt
└── runtime.txt
```

## Logging 📊

The bot includes comprehensive logging:
- File logging to `logs/bot.log`
- Console output
- Different log levels (INFO, DEBUG, ERROR)
- User action tracking
- Error tracking with stack traces

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Support 💬

If you have any questions or need help, feel free to:
- Open an issue
- Join our Telegram channel
- Contact the maintainers

## Acknowledgments 🙏

- [python-telegram-bot](https://github.com/python-telegram-bot/python-telegram-bot)
- [Railway](https://railway.app/) for hosting
- All contributors and users of the bot

---
Made with ❤️ by Alpha-mintamir & Kenawak Ibsa
