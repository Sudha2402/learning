# print("hello")



import pyjokes
# https://pypi.org/project/pyjokes/

print(pyjokes.get_joke())

"""

# https://pypi.org/project/pyjokes/

>>> import pyjokes
>>> print(pyjokes.get_joke("eu"))  # basque joke
Zer dira 8 Bocabits? BocaByte bat
>>> print(pyjokes.get_joke("es", "chuck"))  # spanish chuck norris joke
El teclado de Chuck Norris no tiene tecla F1, es el ordenador el que le pide ayuda a él.

There is also a get_jokes function which returns all the jokes in the given language and category:

"""


# print(pyjokes.get_joke("en", "chuck"))





My_joke = pyjokes.get_joke(language="en", category="all")
print(My_joke)

list_of_jokes = pyjokes.get_jokes(language="en",category="all")

for i in range(0, 4):
    print(list_of_jokes[i], sep='\n')


# for joke in pyjokes.forever():

    # This will go on forever... you're welcome.hence use only if forever jokes are required.

    # print(joke)



# print with line break using ''' ''' or """   """

print('''
Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.

When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.

Then the traveler in the dark
Thanks you for your tiny spark,
How could he see where to go,
If you did not twinkle so?

In the dark blue sky you keep,
Often through my curtains peep
For you never shut your eye,
Till the sun is in the sky.

As your bright and tiny spark
Lights the traveler in the dark,
Though I know not what you are,
Twinkle, twinkle, little star.

''')










# module text to speech
# https://pypi.org/project/pyttsx3/
# https://www.geeksforgeeks.org/python/text-to-speech-changing-voice-in-python/

import pyttsx3
converterTL = pyttsx3.init()
converterTL.say("I will speak this text")
converterTL.runAndWait()
# we need this to start speaking//it is must at the end of last line to speak, if want to restart to speak in later line of codes then stop it first.then use converterTL.runAndWait() after it also
converterTL.stop()

import pyttsx3
converterTL = pyttsx3.init() # object creation

""" RATE"""
rate = converterTL.getProperty('rate')   # getting details of current speaking rate
print (rate)  
                      #printing current voice rate 200
converterTL.setProperty('rate', 125)     # setting up new voice rate

"""VOLUME"""
volume = converterTL.getProperty('volume')   #getting to know current volume level (min=0 and max=1)
print (volume)         
                 #printing current volume level 1.0
converterTL.setProperty('volume',1.0)    # setting up volume level  between 0 and 1

"""VOICE"""
voices = converterTL.getProperty('voices')       #getting details of current voice
#converterTL.setProperty('voice', voices[0].id)  #changing index, changes voices. o for male
converterTL.setProperty('voice', voices[1].id)   #changing index, changes voices. 1 for female

# converterTL.say("Hello World!")
converterTL.say('My current speaking rate is ' + str(rate))
# 200
converterTL.runAndWait()
# it will read first say line only which is not spoken
'''
raise RuntimeError('run loop already started')
RuntimeError: run loop already started 
'''


converterTL.stop()




#absolutely free.
#https://ttsmp3.com/


#https://cloud.google.com/text-to-speech/docs/voices
#https://ttsmp3.com
#https://play.ht
#ResponsiveVoice.org

# import pyttsx3
# converterTL = pyttsx3.init()

converterTL.setProperty('rate', 150) 
# it will control the spped
converterTL.say("""hello everyone it is with great
excitement that I welcome you to
"Phenoxi Shanaya Bazaar", your new
destination for a seamless and enjoyable
online shopping experience
here we have given the chance to play
and win. At Phenoxi Shanaya Bazaar we have
created more than just a website, we have
built a marketplace
designed around you whether you are
searching for the latest fashion trends
everyday essentials or something
uniquely handicrafty. Our mission is
simple to offer you quality, variety
convenience all with just a few clicks
with secure payments reliable delivery
and a userfriendly interface. Shopping
has never been easier or more enjoyable.

let's play this video
"hey eco-conscious shoppers are you ready
to transform your lifestyle and make a
positive impact on our planet welcome to
Shanaya Bazaar where every product tells
a story of sustainability and purpose."

you can log in and if you want to sign
up then you can also do that
currently I am signing in and I will
also click on remember me so that next
time it will not ask me to log in again
now it will show my name here

now if I click on add to cart I will
move to my shopping cart and from here I
can control the cart
if I want to place the order I can place
it, if I want I want to make cash on
delivery I can do that also.
here is the about page.
here is the contact address.
this is the address of the owner to
create the trust. These are the needs
the product that you have ordered so far
and if you want to return something
within 7 days here is the option you
have.
you can describe your issue and you can also
upload the files related to the return
issue.
now we can simply return.
I have ordered these products so far.
suppose I want to see this product again. We just need to click on it and it will open up that product page.

here we can search for woman products.

I'm interested in searching something
else so I can go for that also.
these are the products related to new
trendy. I'm interested in this
dress
then I can navigate and see all the
pictures.
I can select different colors too.
it's so fast and easy to handle.

you can zoom in out.
whatever option you want to do, you are
given everything here.
now you can buy it. you just need to
place the order

if you want to pay with UPI you can just
scan it and pay the amount
but it is recommended to select cash on
delivery for safety.
here I have placed the order with cash
on delivery mode of payment
let's see in our order. yes, here it shows
the product that I have just ordered
right now.
if I want to print these all ordered
list I can also print that.

if I have some complaint or any issue
that I want to tell the owner I can
simply go on help and type everything
here you will come to know about your
consumer rights that is given here.
we believe that every consumer should
know their rights
and their right to be informed about
everything.

okay we have this game section where we
let the user to win and add credit to
their account.
let's play and try to win this game.

here I'm playing this game . we have to
just stop somewhere by moving backward.
so this play says you have sometime move
backward to take decision about where you have
to go in forward direction.

Here this is my login page if I want to
switch I can do that.
This is my shopping cart
I can see all the options by clicking
load more.
I have clicked for T-shirt and here I
got this and if I click on this men's
shirt I can navigate or zoom it in and
out.

I went to this page , i selected it and I
just want to buy it again. look at this i
searched for products related to women.
this is the review image of the product
that I opened earlier.
now if you want to add your review you
can give it here.
this is the product which has got five
stars five stars here you will 
see the user who has uploaded this
review and the pictures that they have
uploaded here. these are the review
images uploaded by the consumer. now you
can see all the photos and files that is
uploaded by customer
this is the watch which if I want to 
choose then I can have it. this is the
image of the watch
now if I want to search something
related to beauty and health I can
select it. here if I click this earpick I
will get this page.
and now it will also demonstrate a video
showing how effective this product is.


thank you for joining us on this journey
we are thrilled to have you as a part of
the "Phenoxi Shanaya Bazaar". happy shopping

i'm out
""", 'test.mp3')

converterTL.runAndWait()
converterTL.stop()
print("saved your audio file")
# if above run and wait works then , it will create audio out of it.




voices = converterTL.getProperty('voices')
for voice in voices:
    # to get the info. about various voices in our PC 
    print("Voice:")
    print("ID: %s" %voice.id)
    print("Name: %s" %voice.name)
    print("Age: %s" %voice.age)
    print("Gender: %s" %voice.gender)
    print("Languages Known: %s" %voice.languages)




voice_id = "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_ZIRA_11.0"

# Use female voice
converterTL.setProperty('voice', voice_id)
converterTL.say("""Twinkle, twinkle, little star,
How I wonder what you are!
Up above the world so high,
Like a diamond in the sky.

When the blazing sun is gone,
When he nothing shines upon,
Then you show your little light,
Twinkle, twinkle, all the night.

Then the traveler in the dark
Thanks you for your tiny spark,
How could he see where to go,
If you did not twinkle so?

In the dark blue sky you keep,
Often through my curtains peep
For you never shut your eye,
Till the sun is in the sky.

As your bright and tiny spark
Lights the traveler in the dark,
Though I know not what you are,
Twinkle, twinkle, little star.
""")

 
converterTL.runAndWait()
converterTL.stop()








# working with os to check the content of all directory files

import os
# directory_path='/'
# directory_path='/python' #error path
directory_path='/Sudhadocuments/python' #error free as / and proper directory used, / at start has importance to go in cuent directory else give label

contents=os.listdir(directory_path)

for files in contents:
    print(files)

# $Recycle.Bin
# $SysReset
# .GamingRoot
# 4DefaultTempSaveScan
# 4DThumb
# Amar
# Amar Store product
# Anjali+Sandhya
# antivirus
# attachment_editing.json
# Documents and Settings
# DumpStack.log.tmp
# ftlog.log
# hiberfil.sys
# hp
# inetpub
# Intel
# logUploaderSettings.ini
# logUploaderSettings_temp.ini
# MinGW
# moplayer
# OneDriveTemp
# pagefile.sys
# papa
# PerfLogs
# product
# Program Files
# Program Files (x86)
# ProgramData
# Python313
# Recovery
# Sudha documents
# sudha-repository
# Sudhadocuments
# swapfile.sys
# System Volume Information
# System.sav
# Users
# Windows
# xampp
# XboxGames
# PS C:\Sudhadocuments\python> 



