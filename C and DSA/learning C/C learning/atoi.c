/*
In C, atoi stands for ASCII To Integer. The atoi() is a library function in C that converts the numbers in string form to their integer value. To put it simply, the atoi() function accepts a string (which represents an integer) as a parameter and yields an integer value in return.

C atoi() function is defined inside <stdlib.h> header file.

Syntax of atoi() Function
int atoi(const char *strg);
Parameters
strg: The string that is to be converted to an integer.

Note: The atoi function takes in a string as a constant (Unchangeable) and gives back the converted integer without modifying the original string.

Return Value
The atoi() function returns the following value:

An equivalent integer value by interpreting the input string as a number only if the input string str is Valid.
If the conversion is not valid, the function returns 0.

Note: In the case of an overflow the returned value is undefined.


*/

// C program to illustrate the use of atoi()

#include <stdio.h>
#include <stdlib.h>
#include <string.h> //to use strcpy

int main()
{

    // string to be converted
    char strToConvert[] = "908475966";

    // converting string using atoi()
    int ConvertedStr = atoi(strToConvert);

    // printing the Converted String
    printf("String to be Converted: %s\n", strToConvert);
    printf("Converted to Integer: %d\n", ConvertedStr);

    /*
    Explanation: The string “99898989” is converted to the corresponding integer value, and both the original string and the returned integer value are printed.

    String to be Converted: 908475966
Converted to Integer: 908475966

    */

    //    if the input string contains non-numeric characters so the function returns 0.

    // string to be converted
    char strToConvertStr[] = "SudhaforShanaya";

    // converting string using atoi()
    int ConvertedStrStr = atoi(strToConvertStr);

    // printing the Converted String
    printf("String SudhaforShanaya to be Converted: %s\n", strToConvertStr);
    printf("Converted to Integer: %d\n", ConvertedStrStr);

    /*
    String SudhaforShanaya to be Converted: SudhaforShanaya
Converted to Integer: 0
    */

    //    The atoi() function does not recognize decimal points or exponents it just takes the integer ignoring the decimals


    int res_val;
    char inp_str[30];

    // Initialize the input string
    strcpy(inp_str, "12.56");

    // Converting string to integer using atoi()
    res_val = atoi(inp_str);

    // print result
    printf("Input String = %s\nResulting Integer = %d\n",
           inp_str, res_val);

    /*
    Input String = 12.56
    Resulting Integer = 12
    */

    //  Passing partially valid string results in conversion of only integer part. (If non-numerical values are at the beginning then it returns 0)

    // Initializing the input string
    strcpy(inp_str, "1234adsnds");

    // Convert string to integer using atoi() and store the
    // result in result_value
    res_val = atoi(inp_str);

    printf("Input String = %s\nResulting Integer = %d\n",
           inp_str, res_val);

    /*
    Input String = 1234adsnds
    Resulting Integer = 1234
    */

    //  Passing string beginning with the character ‘+’ to atoi() then ‘+’ is ignored and only integer value is returned.

    // Initializing the input string
    strcpy(inp_str, "+23234");

    // Convert string to integer using atoi() and store the
    // result in result_value
    res_val = atoi(inp_str);

    printf("Input String = %s\nResulting Integer = %d\n",
           inp_str, res_val);

    /*
    Input String = +23234
    Resulting Integer = 23234
    */

    return 0;
}