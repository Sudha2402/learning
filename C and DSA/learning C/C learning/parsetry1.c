#include <stdio.h> 
#include <string.h> 


void html_Parser(char * string)
{
    int in = 0; ////Variable to track whether we are inside the tag   // used to track if we are inside or outside the tag //in=0 means outside<> but if in=1 then it means inside the <in> angular bracket
    int index = 0; // for inner index of innerText in html tag

    for (int i = 0; i < strlen(string); i++)
    {
        if (string[i] == '<')
        {
            in = 1;   // inside angular bracket
            continue; // terminate for current i and need not to check the below conditions for i hence return to fro loop fro next i
        }
        else if (string[i] == '>')
        {
            in = 0;   // we have reached inside
            continue; // after this we will be inside the innerHTEML or innerText
        }
        if (in == 0)
        {
            string[index] = string[i];
            index++; // it will always keep one index value more than the actual index , means at the end of for loop this index will have value equal to the length that is 1 greater than indexes
        }
    }
    string[index] = '\0';

     //Remove the trailing spaces from the beginning
    while (string[0] == ' ')
    //Shift the string to the left
    {
        for (int i = 0; i < strlen(string); i++)
        {
            string[i] = string[i + 1];
            
        }
        // continue;
        // html_Parser(string);
    }


    //Remove the trailing spaces from the end
    while (string[strlen(string) - 1] == ' ')
    {
        // string[strlen(string) - 1] == '\0';//this is the error and it will halt the program execution and no forther action will take place

        string[strlen(string) - 1] = '\0';

        // continue;
        //  html_Parser(string);
    }

    for (int i = 0; i < strlen(string); i++)
        {
            printf("%c",string[i]);
            
        }

printf("\n");


        return ;
}

int main()
{

    char string[] = "<p>    Sudha is being Sudha         </p>";
    

    html_Parser(string);//Sudha is being Sudha
    printf("parse String is : %s\n",  string);//parse String is : Sudha is being Sudha
    

}