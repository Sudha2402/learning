// C program to illustrate strstr()

#include <stdio.h>
#include <string.h>

/*
In C/C++, std::strstr() is a predefined function used for string matching. <string.h> is the header file required for string functions. This function takes two strings s1 and s2 as arguments and finds the first occurrence of the string s2 in the string s1. The process of matching does not include the terminating null-characters(‘\0’), but function stops there. 

Syntax
char *strstr (const char *s1, const char *s2);
Parameters
s1: This is the main string to be examined.
s2: This is the sub-string to be searched in string.
Return Value
This function returns a pointer point to the first character of the found s2 in s1 otherwise a null pointer if s2 is not present in s1.
If s2 points to an empty string, s1 is returned.


*/

int main()
{
    // Take any two strings
    char s1[] = "SudhaForShanaya";
    // char s2[] = "for";
    char s2[] = "For";
    char* p;

    // Find first occurrence of s2 in s1
    p = strstr(s1, s2); //p stores all the characters thereafter from the returned pointer

    // Prints the result
    if (p) { //if not null as it return pointer if found
        printf("String found\n");
        printf("First occurrence of string '%s' in '%s' is "
               "'%s'\n\n",
               s2, s1, p);

               /*
               String found
First occurrence of string 'For' in 'SudhaForShanaya' is 'ForShanaya'
               */
    }
    else
        printf("String not found\n\n");



 //  Replace a String with Another using strstr()

 // Take any two strings
    char sT1[] = "Fun with STL Sana";
    char sT2[] = "STL";
    char* pT;

    // Find first occurrence of sT2 in sT1
    pT = strstr(sT1, sT2);

    // Prints the result
    if (pT) {
        strcpy(pT, "Strings");//here it is used only for replacing the last word of from the words found upto last overwrite whole as pT return from  string from STL Sana and this will be replaces with Strings as per strcpy overwrites whole

        printf("%s", sT1);//This is the main string and always be main 

        /*
        Fun with Strings
        */
    }
    else
        printf("String not found\n");



    return 0;
}
