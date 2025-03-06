def format_message(message: str, user_name: str = None) -> str:
    """Format the message based on anonymity choice."""
    if user_name:
        return f"🛠 {user_name}: {message}"
    return f"🔹 Anonymous Developer: {message}"
