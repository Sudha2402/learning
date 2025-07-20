#pip install pyautogui

import pyautogui

import time
import pyperclip
#used to take content from the clipboard


from together import Together


# it is used to get position of mouse, better to keep it seperate file

# while True:
#     mousePosition=pyautogui.position()
#     print(mousePosition) #now we will place our mouse at different position and will check it's cordinate




client = Together(
    api_key="together API key",) # auth defaults to os.environ.get("TOGETHER_API_KEY")
    


# def is_last_message_from_receiver(chat_log, receiver_name="Rohan Das"):
def is_last_message_from_receiver(chat_log, receiver_name = "Sudha"):
    # Split the chat log into individual messages
    # Sudha Shanaya World 🌎, [20-07-2025 11:29]
    # Are you preparing well for your exams?
    """
    Check if the last message in the chat log is from the receiver.
    
    Args:
        chat_log (str): The chat log in format "Name, [timestamp]\nMessage"
        receiver_name (str): The name to check for (default "Sudha")
    
    Returns:
        bool: True if last message is from receiver, False otherwise
    """
    
    if not chat_log.strip():
        return False
        
    # Split into lines and reverse to find last sender line
    lines = [line.strip() for line in chat_log.split('\n') if line.strip()]
    
    # Find last line that looks like a sender line (contains timestamp)
    last_sender_line = None
    for line in reversed(lines):
        if '[' in line and ']' in line:
            last_sender_line = line
            break
    
    if not last_sender_line:
        return False
        
        
    # Extract name part (before first comma)
    name_part = last_sender_line.split(',')[0].strip()
    
    # More precise matching - checks if receiver_name appears as whole word
    return receiver_name.lower() in name_part.lower()
    
    



    

pyautogui.click(774, 1063) #774 1063 position of telegram tasbar icon #incase we choosed other tab then , we can put it inside while also so that it clicks it at every start.but it will close when already opened, hence we can use cut in between.


time.sleep(1)  # Wait for 1 second to ensure the click is registered



while True: #it's keep perfoming it for now as testing we need it to be done only once
    time.sleep(5)
    # Step 2: Drag the mouse from (1888, 941) to (524, 121) to select the text
    pyautogui.moveTo(1888, 941)
    pyautogui.dragTo(524, 121, duration=2.0, button='left')  # Drag for 1 second

    # Step 3: Copy the selected text to the clipboard
    pyautogui.hotkey('ctrl', 'c')
    time.sleep(2)  # Wait for 1 second to ensure the copy command is completed

    pyautogui.click(1855, 61) # 1855 61 to deselect the selected text

    # Step 4: Retrieve the text from the clipboard and store it in a variable
    chat_history = pyperclip.paste()

    # Print the copied text to verify
    print(chat_history)
    print(is_last_message_from_receiver(chat_history)) #False
    if not is_last_message_from_receiver(chat_history):
        completion = client.chat.completions.create(
        model="moonshotai/Kimi-K2-Instruct",
        messages=[
            {"role": "system", "content": "You are a person named Sudha who speaks hindi as well as english. You are from India and you are a coder. You analyze chat history and roast people in a funny way. Output should be the next chat response (text message only) with no date and timeline, only message content as response. Give short responses please"},
            # {"role": "system", "content": "Do not start like this Sudha Shanaya World 🌎, [20-07-2025 11:29] "},
            {"role": "user", "content": chat_history}
        ]
        )
        
        
        response = completion.choices[0].message.content
        print(response)
        
        pyperclip.copy(response)
        
        
        #Click at coordinates 1026  994 
        pyautogui.click(1026, 994)
        time.sleep(1)  # Wait for 1 second to ensure the click is registered

        #Paste the text
        pyautogui.hotkey('ctrl', 'v')
        time.sleep(1)  # Wait for 1 second to ensure the paste command is completed

        #Press Enter
        pyautogui.press('enter')
        
   




