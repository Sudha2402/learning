#include <stdio.h>

// for effective code it is not required to use switch as variable declaration is not allowed in swich and as iD , 2D and 3D have different variables requirement hence use Array function and write all conditions there , At last final code is given

/*
int Array(int num)
{
    if (num == 1)
    {
        printf("1D Array ");

        /*
           int size;
       // int OneD[] = {};
       printf("\n1D Array is a single row of elements.\n Enter the size of 1D : ");
       scanf("%d", &size);//if this size input is taken in the switch case then it would create error for printing the array hence where size is declared take the input there.
       int OneD[size];
       printf("Enter the elements of 1D Array:\n");
       for (int i = 0; i < size; i++)
       {
           scanf("%d", &OneD[i]);
           }
        */

/*
}
else if (num == 2)
{
 printf("2D Array ");
}
else if (num == 3)
{
 printf("3D Array ");
}
else
{
 printf("Invalid Input ");
}
}






int main()
{
int num;
printf("Enter the number of dimensions: ");
scanf("%d", &num);
Array(num);

// if(num==1){

int size;
// int OneD[] = {};
printf("\n1D Array is a single row of elements.\n Enter the size of 1D : ");
scanf("%d", &size); // if this size input is taken in the switch case then it would create error for printing the array hence where size is declared take the input there.
int OneD[size];
// }


switch (num)
{

case 1:

 //  int OneD[] = {};//error: a label can only be part of a statement and a declaration is not a statement
 // int size;//error: a label can only be part of a statement and a declaration is not a statement

 // int OneD[size];
 // int OneD[size]={};//error

 // int OneD[];//error
 // int OneD[10]; // no error

 printf("Enter elements in 1D :\n");

 for (int i = 0; i < size; i++)
 {//size will be undefined if it will be put in if condition in main

     // int element;
     printf("element at index %d :", i);
     // scanf("%d", &element);
     // OneD[i] = element;
     scanf("%d", &OneD[i]);
     // continue;
 }

 printf("elements in !D array are: ");

 for (int i = 0; i < size; i++)
 // for (int i=0; i < length; i++)
 { // not executes at this case statement as size and OneD[] is declared outside switch
     printf("%d \t ", OneD[i]);
 }

 break;

case 2:
case 3:
dafault:
 printf("Not valid dimension:");
}


return 0;
}

*/



int arrayInC(int num)
{

    if (num == 1)
    {
        printf("ready to create 1D array\n");
        int size;
        printf("Enter size of 1D array:");
        scanf("%d", &size);
        int OneD[size];
        for (int i = 0; i < size; i++)
        {
            printf("Enter the element at index %d : ", i);
            scanf("%d", &OneD[i]);
        }
        printf("1D array:\n");
        for (int i = 0; i < size; i++)
        {
            printf("%d \t", OneD[i]);
        }
    }
    else if (num == 2)
    {
        printf("ready to create 2D array\n");
        int rows, cols;
        printf("Enter number of rows in 2D :");
        scanf("%d", &rows); // scanf if present in the next line line the next print will be executed only after enter in scanf hence , new line is automatically created after scanf, hence not needed to use \n , it will create extra space
        printf("Enter number of columns in 2D :");
        scanf("%d", &cols);
        int TwoD[rows][cols];
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                printf("Enter the element at row %d and column %d , TwoD[%d][%d] : ", i, j, i, j);
                scanf("%d", &TwoD[i][j]); // if no data is entered then it will take the addresses as the value and execute all the code to the last
            }
        }
        printf("2D array:\n");
        for (int i = 0; i < rows; i++)
        {
            for (int j = 0; j < cols; j++)
            {
                printf("%d \t", TwoD[i][j]);
            }
            printf("\n");
        }

        /*   In case when no input is given
       Enter number of rows in 2D :3
       Enter number of columns in 2D :2
       Enter the element at row 0 and column 0 , TwoD[0][0]
       : cd "c:\Sudhadocuments\C files\C learning"
       Enter the element at row 0 and column 1 , TwoD[0][1]
       : Enter the element at row 1 and column 0 , TwoD[1][0]
       : Enter the element at row 1 and column 1 , TwoD[1][1]
       : Enter the element at row 2 and column 0 , TwoD[2][0]
       : Enter the element at row 2 and column 1 , TwoD[2][1]
       : 2D array:
       32      0       4200031         4210837         6356648         0
       */

        /*
        // final output
        Enter the dimension of Array :2
        ready to create 2D array
        Enter number of rows in 2D :3
        Enter number of columns in 2D :2
        Enter the element at row 0 and column 0 , TwoD[0][0] : 1
        Enter the element at row 0 and column 1 , TwoD[0][1] : 2
        Enter the element at row 1 and column 0 , TwoD[1][0] : 3
        Enter the element at row 1 and column 1 , TwoD[1][1] : 4
        Enter the element at row 2 and column 0 , TwoD[2][0] : 5
        Enter the element at row 2 and column 1 , TwoD[2][1] : 6
        2D array:
        1       2
        3       4
        5       6
        */
    }

    else if (num == 3)
    {
        printf("ready to create 3D array\n");
        int rows, cols, layers;
        printf("Enter number of rows in 3D :");
        scanf("%d", &rows);
        printf("Enter number of columns in 3D :");
        scanf("%d", &cols);
        printf("Enter number of layers in 3D :");
        scanf("%d", &layers);

        int ThreeD[layers][rows][cols];

        for (int k = 0; k < layers; k++)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    printf("Enter the element at layer %d , row %d and column %d , ThreeD[%d][%d][%d] : ", k, i, j, k, i, j);
                    scanf("%d", &ThreeD[k][i][j]);
                }
            }
        }
        printf("3D array:\n");
        for (int k = 0; k < layers; k++)
        {
            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < cols; j++)
                {
                    printf("%d \t", ThreeD[k][i][j]);
                }
                printf("\n");
            }
            printf("\n");
        }

        /* Output
        Enter the dimension of Array :3
        ready to create 3D array
        Enter number of rows in 3D :4
        Enter number of columns in 3D :2
        Enter number of layers in 3D :2
        Enter the element at layer 0 , row 0 and column 0 , ThreeD[0][0][0] : 2
        Enter the element at layer 0 , row 0 and column 1 , ThreeD[0][0][1] : 3
        Enter the element at layer 0 , row 1 and column 0 , ThreeD[0][1][0] : 3
        Enter the element at layer 0 , row 1 and column 1 , ThreeD[0][1][1] : 2
        Enter the element at layer 0 , row 2 and column 0 , ThreeD[0][2][0] : 3
        Enter the element at layer 0 , row 2 and column 1 , ThreeD[0][2][1] : 2
        Enter the element at layer 0 , row 3 and column 0 , ThreeD[0][3][0] : 3
        Enter the element at layer 0 , row 3 and column 1 , ThreeD[0][3][1] : 2
        Enter the element at layer 1 , row 0 and column 0 , ThreeD[1][0][0] : 3
        Enter the element at layer 1 , row 0 and column 1 , ThreeD[1][0][1] : 2
        Enter the element at layer 1 , row 1 and column 0 , ThreeD[1][1][0] : 3
        Enter the element at layer 1 , row 1 and column 1 , ThreeD[1][1][1] : 2
        Enter the element at layer 1 , row 2 and column 0 , ThreeD[1][2][0] : 3
        Enter the element at layer 1 , row 2 and column 1 , ThreeD[1][2][1] : 2
        Enter the element at layer 1 , row 3 and column 0 , ThreeD[1][3][0] : 3
        Enter the element at layer 1 , row 3 and column 1 , ThreeD[1][3][1] : 2
        3D array:
        2       3
        3       2
        3       2
        3       2

        3       2
        3       2
        3       2
        3       2
        */
    }

    else
    {
        printf("Not valid dimension");
    }
}



int main()
{
    int num;
    printf("Enter the dimension of Array :");
    scanf("%d", &num);
    arrayInC(num);

    // Array reversal
    int arrToRev[] = {2, 5, 3, 4, 3, 43};
    arrayRev(arrToRev);

    return 0;
}
