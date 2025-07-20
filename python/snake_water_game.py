import random
import re
import json  # Better alternative for storing scores

# Import score handling module
import scoreFile

# Game choices mapping
CHOICES = {
    "s": 0,
    "w": 1,
    "g": 2
}

REVERSE_CHOICES = {
    0: "Snake",
    1: "Water",
    2: "Gun"
}

score = 0

def get_player_name():
    """Get and validate player name"""
    while True:
        name = input("Enter your name: ").strip()
        if name:
            return name
        print("Please enter a valid name.")

def end_game(name, final_score):
    """Handle score updates when game ends"""
    name = name.lower()
    
    # Read current scores
    try:
        with open("scores.json", "r") as f:
            scores = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        scores = {}

    if name in scores:
        print("You are a returning player")
        old_score = scores[name]
        print(f"Your highest score ever was: {old_score}")
        
        if final_score > old_score:
            scores[name] = final_score
            print(f"New high score! Your current best is now: {final_score}")
    else:
        print("You are a new player")
        scores[name] = final_score

    # Save updated scores
    with open("scores.json", "w") as f:
        json.dump(scores, f, indent=4)

def selection(value):
    """Convert numeric choice to string"""
    return REVERSE_CHOICES.get(value, "Invalid choice")

def game_round():
    """Handle one round of the game"""
    global score
    
    print('''
Enter 0 for Snake
Enter 1 for Water
Enter 2 for Gun''')
    
    try:
        user_choice = int(input("Enter your choice: "))
    except ValueError:
        print("Please enter a valid number (0, 1, or 2)")
        return "invalid"
    
    system_choice = random.randint(0, 2)
    
    print(f"\nOpponent selected: {selection(system_choice)}")
    print(f"You selected: {selection(user_choice)}")
    
    return determine_winner(system_choice, user_choice)

def determine_winner(system, user):
    """Determine the winner of a round"""
    global score
    
    if user not in (0, 1, 2):
        print("Invalid choice! You lose this round.")
        return "system"
    
    if system == user:
        return "draw"
    
    # Winning conditions: (Snake vs Water) or (Water vs Gun) or (Gun vs Snake)
    if (system == 0 and user == 1) or (system == 1 and user == 2) or (system == 2 and user == 0):
        return "system"
    else:
        score += 1
        return "player"

def main_game():
    """Main game loop"""
    global score
    name = get_player_name()
    
    while True:
        result = game_round()
        
        if result == "invalid":
            continue
            
        if result == "draw":
            print("This round is a draw!")
        elif result == "system":
            print("System won this round!")
        else:
            print("You won this round!")
        
        print(f"Current score: {score}\n")
        
        try:
            continue_choice = int(input("Continue playing? (1=Yes, 0=No): "))
            if continue_choice == 0:
                print("\nThanks for playing!")
                end_game(name, score)
                break
            elif continue_choice != 1:
                print("Please enter either 1 (Yes) or 0 (No)")
        except ValueError:
            print("Please enter a valid number (1 or 0)")

if __name__ == "__main__":
    main_game()