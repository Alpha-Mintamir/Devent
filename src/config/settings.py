import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Bot configuration
BOT_TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID')

# Validate configuration
if not BOT_TOKEN:
    raise ValueError("BOT_TOKEN not found in environment variables")
if not CHANNEL_ID:
    raise ValueError("CHANNEL_ID not found in environment variables")
