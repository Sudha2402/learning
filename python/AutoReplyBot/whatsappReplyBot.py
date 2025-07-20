#pip install pyautogui

import pyautogui

import time
import pyperclip
#used to take content from the clipboard


from openai import OpenAI


# it is used to get position of mouse, better to keep it seperate file

# while True:
#     mousePosition=pyautogui.position()
#     print(mousePosition) #now we will place our mouse at different position and will check it's cordinate



client = OpenAI(api_key="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",
                    #this api key needs balance for ready to use purpose
)

    


# def is_last_message_from_receiver(chat_log, receiver_name="Rohan Das"):
def is_last_message_from_receiver(chat_log, receiver_name = "Sudha"):
    # Split the chat log into individual messages
    messages = chat_log.strip().split("/2025] ")[-1]
    if receiver_name in messages:
        return True 
    return False



    

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
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a person named Sudha who speaks hindi as well as english. You are from India and you are a coder. You analyze chat history and roast people in a funny way. Output should be the next chat response (text message only) with no date and timeline, only message content as response"},
            {"role": "system", "content": "Do not start like this [21:02, 12/6/2024] Sudha: "},
            {"role": "user", "content": chat_history}
        ]
        )
        
        
        response = completion.choices[0].message.content
        pyperclip.copy(response)
        
        
        #Click at coordinates 1026  994 
        pyautogui.click(1026, 994)
        time.sleep(1)  # Wait for 1 second to ensure the click is registered

        #Paste the text
        pyautogui.hotkey('ctrl', 'v')
        time.sleep(1)  # Wait for 1 second to ensure the paste command is completed

        #Press Enter
        pyautogui.press('enter')
        
   




