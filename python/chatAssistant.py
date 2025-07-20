# print("hello")

#we decided to make a seperate folder for this.

from gtts import gTTS 
#it is google text to speech for good voice tones
# tts = gTTS('hello')
# tts.save('hello.mp3') 


from openai import OpenAI

def aiProcess(command):
    client = OpenAI(api_key="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",
                    #this api key needs balance for ready to use purpose
    )

    completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a virtual assistant named phenoxi skilled in general tasks like Alexa and Google Cloud. Give short responses please"},
        {"role": "user", "content": command}
    ]
    )

    return completion.choices[0].message.content

