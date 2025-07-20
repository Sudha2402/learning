from openai import OpenAI
#pip install openai

# if you saved the key under a different environment variable name, you can do something like:
client = OpenAI(
  api_key="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",
)

completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a virtual assistant named phenoxi skilled in general tasks like Alexa and Google Cloud"},
    {"role": "user", "content": "what is coding"}
  ]
)

print(completion.choices[0].message.content) #it should give the response of what is coding question in the answer.


# it works but since we don't have openAI key budget set and perchased, we can't use it.



# import os
# import openai

# Set your API key as an environment variable
# os.environ["OPENAI_API_KEY"] = "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"

# Now you can use the API
# try:
#     response = openai.ChatCompletion.create(
#         model="gpt-3.5-turbo",
#         messages=[{"role": "user", "content": "Hello!"}]
#     )
#     print(response.choices[0].message.content)
# except openai.error.AuthenticationError:
#     print("Invalid API key")
# except openai.error.RateLimitError:
#     print("Rate limit exceeded")
# except Exception as e:
#     print(f"An error occurred: {str(e)}")

# client = OpenAI()

# response = client.responses.create(
#     model="gpt-4.1",
#     input="Write a one-sentence bedtime story about a unicorn."
# )

# print(response.output_text)