# import openai
# openai.api_base = "https://api.deepinfra.com/v1/openai"
# openai.api_key = "your-free-key"  # Sign up to get a key

# https://deepinfra.com/

from openai import OpenAI

openai = OpenAI(
    api_key="k7EhzrGe9HxA1s22xYGpnDsSAyBoGCoI",
    base_url="https://api.deepinfra.com/v1/openai",
)

stream = True # or False

chat_completion = openai.chat.completions.create(
    model="meta-llama/Meta-Llama-3-8B-Instruct",
    messages=[
        {"role": "system", "content": "You are a virtual assistant named phenoxi skilled in general tasks like Alexa and Google Cloud"},
        {"role": "user", "content": "Can you name at least two different techniques to cook lamb?"},
        {"role": "assistant", "content": "Bonjour! Let me tell you, my friend, cooking lamb is an art form, and I'm more than happy to share with you not two, but three of my favorite techniques to coax out the rich, unctuous flavors and tender textures of this majestic protein."},
    ],
    stream=stream,
)

if stream:
    for event in chat_completion:
        if event.choices[0].finish_reason:
            print(event.choices[0].finish_reason,
                  event.usage['prompt_tokens'],
                  event.usage['completion_tokens'])
        else:
            print(event.choices[0].delta.content)
else:
    print(chat_completion.choices[0].message.content)
    print(chat_completion.usage.prompt_tokens, chat_completion.usage.completion_tokens)
