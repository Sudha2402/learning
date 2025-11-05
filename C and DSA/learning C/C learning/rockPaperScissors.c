#include <stdio.h>
#include <stdlib.h> //if it is not entered then you get this warning
/*
warning: implicit declaration of function 'rand' [-Wimplicit-function-declaration]
     return rand() % n;
            ^~~~
 */
#include <time.h>



int play(char player1[50], char player2[50])
{

    static int score = 0, score2 = 0;
    int selection ,selection2;
    int play_again;
    printf("%s ,Please choose (rock 0 ,paper 1, scissor 2) : ", player1);
    scanf("%d", &selection);

    srand(time(NULL));
    selection2 = rand()%3; // to generate number less than 3 that is 0, 1, 2
printf("%s , choosed (rock 0 ,paper 1, scissor 2) : %d \n", player2,selection2);


    if (selection2 == 0 && selection == 1)
    {
        score++;
        printf("%s won and your score is %d\n", player1, score);
        printf("%s lost and current score is %d\n", player2, score2);
    }
    else if (selection2 == 1 && selection == 2)
    {
        score++;
        printf("%s won and your score is %d\n", player1, score);
        printf("%s lost and current score is %d\n", player2, score2);
    }
    else if (selection2 == 2 && selection == 0)
    {
        score++;
        printf("%s won and your score is %d\n", player1, score);
        printf("%s lost and current score is %d\n", player2, score2);
    }
    else if (selection2 == selection)
    {
        printf("Draw \n");
        printf("%s current score is %d\n", player1, score);
        printf("%s current score is %d\n", player2, score2);
    }
    else
    {
        score2++;
        printf("You lost and your current score is %d\n", score);
        printf("%s win and current score is %d\n", player2, score2);
        
    }

    printf("Do you want to play again (1/0) : ");
    scanf("%d", &play_again);

    if (play_again == 1)
    {
        play(player1, player2);
    }

    return 0;
}

int main()
{
    char player1[50], player2[50];

    printf("Enter your name : ");
    // scanf("%s", player1);
    scanf("%s", &player1);
    printf("Enter the name of player you want to play with : ");
    // scanf("%s", player2);
    scanf("%s", &player2);

    printf("Player 1 name is %s\n", player1);
    printf("Player 2 name is %s\n", player2);

    // printf("%s ,Please choose (rock 0 ,paper 1, scissor 2) : ", player1);
    // scanf("%d", &selection);

    play(player1, player2);

    printf("\n");
    // print("score:",score);//not defined as it is inside function but it remains in memeory as static and keeps updating

    return 0;
}