#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// this is a string
char * replaceWord(const char * str, const char * oldWord, const char * newWord)
{
    
    char * resultString;//final return value will be this and it gets printed in output using %s as pointer is used
    int i, count = 0;
    int newWordLength = strlen(newWord);
    int oldWordLength = strlen(oldWord);


    // Lets count the number of times old word occurs in the string
    for (i = 0; str[i] !='\0'; i++)//this will keep the string of fgets content

    { //indexing works here as str[i] is an array of char
        if (strstr(&str[i], oldWord) == &str[i]) //char *strstr (const char *s1, const char *s2);//as strstr takes pointer parameter hence address is passed to  //&str[i] gives the mains string //basically strstr returns the pointer and if this point is also pointed by &str[i] then it it gets into if condition satisfied
        {
            count++;

            // Jump over this word
            i = i + oldWordLength - 1; //1 is subtracted as strlen  counts from 1 to n and index takes from 0
        }
    }

    // Making a new string to fit in the replaced words
    resultString = (char *)malloc(i + count * (newWordLength - oldWordLength) + 1);//i stores the point where the old word ended and from there the difference size is also created //inshort resultString stores whole new file size from start to end of file //if newwordlength is less than oldlength then (newWordLength - oldWordLength) give -ve value and size will be decreased in that case

    i = 0;
    while (*str)//str is the file content from fgets
    {
        // Compare the substring with result
        if(strstr(str, oldWord) == str)
        {
            strcpy(&resultString[i], newWord);

            i += newWordLength;//i is taken from 0 of the file//here i is responsible for writing the content in the actual bill generated

            str += oldWordLength;//str pointer will move end of oldword
        }
        else{//when nothing has to substitute
            resultString[i] = *str;//it is just traversing 
            i += 1;//i is taken from 0 of the file
            str +=1;
        }
    }
    resultString[i] = '\0';
    return resultString; //it is a kind of pointer result hence it gets stored in  pointer newStr created below

}

int main()
{
    FILE * ptr = NULL;
    FILE * ptr2 = NULL;
    ptr = fopen("bill.txt", "r");
    ptr2 = fopen("genBill.txt", "w");
    char str [200];
    fgets(str, 200, ptr);
    printf("The given bill template was:\n %s\n\n", str);

    // Call the replaceWord function and generate newStr
    char * newStr;//as function defined replaceWord is also pointer
    newStr = replaceWord(str, "{{item}}", "body massager");
    newStr = replaceWord(newStr, "{{outlet}}", "phenoxi Shanaya Bazaar");
    newStr = replaceWord(newStr, "{{name}}", "Sudha");
    printf("The actual bill generated is:\n %s\n\n", newStr);

    printf("The generated bill has been written to the file genBill.txt\n");

    
    fprintf(ptr2, "%s", newStr);
    
    fclose(ptr);
    fclose(ptr2);
    return 0;
}
