#include <stdio.h>
#include <string.h>

// HTML Parser is a program/software by which useful statements can be extracted, leaving html tags (like <h1>, <span>, <p> etc) behind.

/*
Input: <h1>Geeks for Geeks</h1>
Output: Geeks for Geeks
Explanation- <h1> and </h1> are opening and closing heading tags, so they got parsed leaving “Geeks for Geeks” as the output.


Input: <p>    Geeks for Geeks</p>
Output: Geeks for Geeks
Explanation- <p> and </p> are opening and closing paragraph tags, so they get parsed and the parser ignores space character, leaving “Geeks for Geeks” as the output.
*/

int parse(char *string)
{
    int i = 0;
    int j = 0;
    while (string[i] != '\0')
    {
        if (string[i] == '<')
        {
            j = i + 1;
            while (string[j] != '>')
            {
                j++;
            }
        }
        if (string[0] == ' ')
        {
            string[j] = string[j + 1];
        }
        else if (string[strlen(string) - 1] == ' ')
        {
            string[strlen(string) - 1] = '\0';
        }

        for (int i = 0; i < strlen(string); i++)
        {

            string[i] = string[j];
            j++;
            if (string[j] == '\0')
            {
                // string[i] = '\0';//" " gives error hence use ''
                string[i] = '\0';
                break;
            }
        }
    }

    for (int i = 0; i < strlen(string); i++)
    {
        printf("%c", string[i]);
    }
    printf("\n");

    return 0;
}

void html_Parser(char *string)
{

    printf("\nstring : %s",string);
    int in = 0;    // used to track if we are inside or outside the tag //in=0 means outside<> but if in=1 then it means inside the <in> angular bracket
    int index = 0; // for inner index of innerText in html tag

    for (int i = 0; i < strlen(string); i++)
    {
        if (string[i] == '<')
        {
            printf("\n inside angular");
            in = 1;   // inside angular bracket
            continue; // terminate for current i and need not to check the below conditions for i hence return to fro loop fro next i
        }
        else if (string[i] == '>')
        {
            printf("\n outside angular");
            in = 0;   // we have reached inside
            continue; // after this we will be inside the innerHTEML or innerText
        }
        else{

           
            if (in == 1){

                printf("\n inside angular char");
            
            continue;
            }
            else{
                printf("\n outside angular char");
            
            // return;
            }
        }
      
       
        if (in == 0)
        {
            string[index] = string[i];
            printf("\n Inside : %c",string);
            index++; // it will always keep one index value more than the actual index , means at the end of for loop this index will have value equal to the length that is 1 greater than indexes
           
        }
      
    }

    string[index] = '\0';

printf("\n string inside: %s",string);//string inside:     Geeks for Geeks

    while (string[0] == ' ')
    { // to trim left
        for (int i = 0; i < strlen(string); i++)
        {
            string[i] = string[i + 1];
        }
        printf("\n string inside after one one left trim: %s",string);
        continue;
    }


    printf("\n string after left trim: %s",string);// string after left trim: Geeks for Geeks
    printf("\nstring length : %d",(strlen(string) - 1));//string after left trim: Geeks for Geeks         string length : 23
    printf("\nlast string: %c",string[strlen(string) - 1]);//string after left trim: Geeks for Geeks         string length : 32

    while (string[strlen(string) - 1] == ' ')
    { // to trim from right
    
        string[strlen(string) - 1] = '\0';
        printf("\n string inside after one one right trim: %s",string);
        printf("\nstring length : %d",(strlen(string) - 1));

        continue;
        // continue;
    }

    printf("\n string inside after trimming: %s",string);
}

int main()
{

    char string[] = "<p>    Geeks for Geeks         </p>";
    // parse(string);
    // printf("parse String is : %s\n", parse(string)); //parse String is : (null)
    printf("%s", string);
    // html_Parser(string);
    html_Parser(string);//works//string inside after trimming: Geeks for Geeks
    printf("\n string after html parse: %s",string);//string after html parse: Geeks for Geeks


    // printf("parse String is : %s\n", parse(string)); // same as html parse , no need of this//parse String is : (null)//it is same as this function.




}