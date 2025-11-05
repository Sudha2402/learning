// C program to Implement Custom atoi() 
// ascii to integer
  
#include <stdio.h> 
  
int atoi_Conversion(const char* strg) 
{ 
  
    // Initialize res to 0 
    int res = 0; 
    int i = 0; 
  
    // Iterate through the string strg and compute res 
    while (strg[i] != '\0') { 

        printf("i=%d res = %d\n",i,res);
        res = res * 10 + (strg[i] - '0');//10 is used make initial res at one digit place right appending the new in right place //res * 10  + (strg[i] - '0') is used to convert the character to integer implicitly as res * 10 is integer and (strg[i] - '0') is string and as int is first hence whole will be converted into integer.

        i++; 
    } 
    return res; 
} 


  
int main() 
{ 
    // const char strg[] = "12345"; 
    const char strg[] = "5654"; 
    int value = atoi_Conversion(strg); 
  
    // print the Converted Value 
    printf("String to be Converted: %s\n", strg); 
    printf("Converted to Integer: %d\n", value); 
    return 0;
     
}