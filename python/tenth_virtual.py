#  pip install pandas

import pandas
print(pandas.__version__) #2.3.1 as per global interpreter


"""
PS C:\Sudhadocuments\python> pip install pandas --default-timeout=100           
Defaulting to user installation because normal site-packages is not writeable
Collecting pandas
  Using cached pandas-2.3.1-cp313-cp313-win_amd64.whl.metadata (19 kB)
Collecting numpy>=1.26.0 (from pandas)
  Using cached numpy-2.3.1-cp313-cp313-win_amd64.whl.metadata (60 kB)
Collecting python-dateutil>=2.8.2 (from pandas)
  Using cached python_dateutil-2.9.0.post0-py2.py3-none-any.whl.metadata (8.4 kB)
Collecting pytz>=2020.1 (from pandas)
  Using cached pytz-2025.2-py2.py3-none-any.whl.metadata (22 kB)
Collecting tzdata>=2022.7 (from pandas)
  Using cached tzdata-2025.2-py2.py3-none-any.whl.metadata (1.4 kB)
Collecting six>=1.5 (from python-dateutil>=2.8.2->pandas)
  Using cached six-1.17.0-py2.py3-none-any.whl.metadata (1.7 kB)
Downloading pandas-2.3.1-cp313-cp313-win_amd64.whl (11.0 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 11.0/11.0 MB 9.8 MB/s eta 0:00:00
Downloading numpy-2.3.1-cp313-cp313-win_amd64.whl (12.7 MB)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 12.7/12.7 MB 3.4 MB/s eta 0:00:00
Downloading python_dateutil-2.9.0.post0-py2.py3-none-any.whl (229 kB)
Downloading pytz-2025.2-py2.py3-none-any.whl (509 kB)
Downloading six-1.17.0-py2.py3-none-any.whl (11 kB)
Downloading tzdata-2025.2-py2.py3-none-any.whl (347 kB)
Installing collected packages: pytz, tzdata, six, numpy, python-dateutil, pandas
   ━━━━━━━━━━━━━━━━━━━━╺━━━━━━━━━━━━━━━━━━━ 3/6 [numpy]  WARNING: The scripts f2py.exe and numpy-config.exe are installed in 'C:\Users\amark\AppData\Roaming\Python\Python313\Scripts' which is not on PATH.
  Consider adding this directory to PATH or, if you prefer to suppress this warning, use --no-warn-script-location.
Successfully installed numpy-2.3.1 pandas-2.3.1 python-dateutil-2.9.0.post0 pytz-2025.2 six-1.17.0 tzdata-2025.2                                             
PS C:\Sudhadocuments\python> 

"""


#pip install virtualenv


#python -m virtualenv env

# .\env\Scripts\activate


# (env) PS C:\Sudhadocuments\python> pip install pandas==1.5.2 
#note here == is used not =




# >pip freeze shows all the packages installed
'''
comtypes==1.4.11
distlib==0.4.0
filelock==3.18.0
numpy==2.3.1
pandas==2.3.1
platformdirs==4.3.8
pyjokes==0.8.3
pypiwin32==223
python-dateutil==2.9.0.post0
pyttsx3==2.98
pytz==2025.2
pywin32==310
six==1.17.0
tzdata==2025.2
virtualenv==20.31.2

'''


#PS C:\Sudhadocuments\python> pip freeze > requirements.txt
# PS C:\Sudhadocuments\python> pip install -r .\requirements.txt

# -r is used for recreate.