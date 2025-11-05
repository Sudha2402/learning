#include <stdio.h>

//keep the size same in both A[5][5], B[5][5] and a = 5, b = 5;  as defined otherwise it shows unexpected result when passing array in function parameter but size will not create problem if all code is present in main and not function call is done 
//check addmul.c in DSA folder


int A[5][5], B[5][5];
// int a=5, b=5;//global declaration necessary
int a = 5, b = 5; // global declaration necessary but according to the matrix needed
int c = 5, d = 5; // global declaration necessary but according to the matrix needed

// void traverse(int *m[a][b]){
// void traverse(int *m,int a,int b){
// void traverse(int *m[5] ,int a,int b){
/*
matrix_Multiplication.c:8:6: note: expected 'int **' but argument is of type 'int (*)[5]'
void traverse(int *m[5] ,int a,int b){
*/
//    void traverse(int **m[5] ,int a,int b){
/*
matrix_Multiplication.c:13:9: note: expected 'int ***' but argument is of type 'int (*)[5]'
    void traverse(int **m[5] ,int a,int b){
         ^~~~~~~~
*/
//    void traverse(int *m[5] ,int a,int b){

void traverse(int m[a][b])
{
    printf("the matrix is :\n");
    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            printf("%d\t", m[i][j]);
        }
        printf("\n");
    }

    return;
}

int mul[5][5];
void multiply(int m[a][b], int n[c][d])
{

    int sum = 0;
    for (int i = 0; i < a; i++)
    {
        for (int j = 0; j < b; j++)
        {
            for (int k = 0; k < b; k++)
            {
                sum += m[i][k] * m[k][j];
            }
            mul[i][j] = sum;
        }
        printf("\n");
    }
    printf("the matrix multiplication is done:\n");
}

int main()
{

    int m, n, p, q;
    printf("Matrix multiplication\n");
    printf("Enter number of rows in matrix A\n");
    scanf("%d", &m);
    printf("%d\n",m);
    printf("Enter number of cols in matrix A\n");
    scanf("%d", &n);
    printf("%d\n",n);
    printf("Enter number of rows in matrix B\n");
    scanf("%d", &p);
    printf("%d\n",p);
    printf("Enter number of rows in matrix B\n");
    scanf("%d", &q);
    printf("%d\n",q);

    for (int i = 0; i < m; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("Enter the number at A[%d][%d] :", i, j);
            scanf("%d", &A[i][j]);
        }
        
    }
    for (int i = 0; i < p; i++)
    {
        for (int j = 0; j < q; j++)
        {
            printf("Enter the number at B[%d][%d] :", i, j);
            scanf("%d", &B[i][j]);
        }
    }

    //  traverse(&A[m][n]);
    //  traverse(A,m,n);
    /*
    matrix_Multiplication.c:8:6: note: expected 'int *' but argument is of type 'int (*)[5]'
    void traverse(int  *m,int a,int b){
    */
    //  traverse(&A[m][n],m,n);
    traverse(A);
    printf("\n\n");
    traverse(B);

    /*
    the matrix is :
2       2       0       0       0
2       22      0       0       0
0       0       0       0       0
0       0       0       0       0
0       0       0       0       0


//it gives zero to those position where value os not assign , instead of this defiene global a and b according to the row and cloumn need,  here as a=5 and b=5 , it shows 5*5 matrix.
    */

    // int arr[][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    // traverse(arr);

    printf("\n\n");

    if (n != p)
    {
        printf("MUL not possible");
        return 0;
    }

    multiply(A, B);

    printf("\n\n");
    traverse(mul);

    /*the matrix multiplication is
8       16      16      16      16
24      32      32      32      32
32      32      32      32      32
32      32      32      32      32
32      32      32      32      32
    

    here 16 repeat for rest in that row as 16 was the last element in that row and 32 repeats thereafter as no input for it.
    */

    return 0;
}


/*
Enter number of rows in matrix A
5
5
Enter number of cols in matrix A
5
5
Enter number of rows in matrix B
5
5
Enter number of rows in matrix B
5
5
Enter the number at A[0][0] :5
Enter the number at A[0][1] :5
Enter the number at A[0][2] :5
Enter the number at A[0][3] :5
Enter the number at A[0][4] :5
Enter the number at A[1][0] :5
Enter the number at A[1][1] :5
Enter the number at A[1][2] :5
Enter the number at A[1][3] :5
Enter the number at A[1][4] :5
Enter the number at A[2][0] :5
Enter the number at A[2][1] :5
Enter the number at A[2][2] :5
Enter the number at A[2][3] :5
Enter the number at A[2][4] :5
Enter the number at A[3][0] :5
Enter the number at A[3][1] :5
Enter the number at A[3][2] :5
Enter the number at A[3][3] :5
Enter the number at A[3][4] :5
Enter the number at A[4][0] :5
Enter the number at A[4][1] :5
Enter the number at A[4][2] :5
Enter the number at A[4][3] :5
Enter the number at A[4][4] :5
Enter the number at B[0][0] :5
Enter the number at B[0][1] :5
Enter the number at B[0][2] :5
Enter the number at B[0][3] :5
Enter the number at B[0][4] :5
Enter the number at B[1][0] :5
Enter the number at B[1][1] :5
Enter the number at B[1][2] :5
Enter the number at B[1][3] :5
Enter the number at B[1][4] :5
Enter the number at B[2][0] :5
Enter the number at B[2][1] :5
Enter the number at B[2][2] :5
Enter the number at B[2][3] :5
Enter the number at B[2][4] :5
Enter the number at B[3][0] :5
Enter the number at B[3][1] :5
Enter the number at B[3][2] :5
Enter the number at B[3][3] :5
Enter the number at B[3][4] :5
Enter the number at B[4][0] :5
Enter the number at B[4][1] :5
Enter the number at B[4][2] :5
Enter the number at B[4][3] :5
Enter the number at B[4][4] :5
the matrix is :
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5


the matrix is :
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5
5       5       5       5       5


the matrix multiplication is done:


the matrix is :
125     250     375     500     625
750     875     1000    1125    1250
1375    1500    1625    1750    1875
2000    2125    2250    2375    2500
2625    2750    2875    3000    3125


PS C:\Sudhadocuments\C files\C learning>



*/