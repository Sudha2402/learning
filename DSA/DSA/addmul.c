#include <stdio.h>
#include <conio.h>

int m, n, p, q, i, j,k;
int A[5][5], B[5][5], Add[5][5] = {0}, Mul[5][5] = {0}, Trans[5][5];
int main()
{
    printf("Enter no. of rows in matrix A");
    scanf("%d", &m);
    printf("Enter no. of col in matrix A");
    scanf("%d", &n);
    printf("Enter no. of rows in matrix B");
    scanf("%d", &p);
    printf("Enter no. of rows in matrix B");
    scanf("%d", &q);

    if (m != p || n != q)
    {
        printf("ADD not possible");
        return;
    }
    else if (n != p)
    {
        printf("MUL not possible");
        return;
    }
    else
    {
        printf("Enter data in A");
        for (i = 0; i < m; i++)
        {
            for (j = 0; j < n; j++)
            {
                printf("Enter the value at %d %d", i, j);
                scanf("%d", &A[i][j]);
            }
        }

        printf("Enter data in B");
        for (i = 0; i < p; i++)
        {
            for (j = 0; j < q; j++)
            {
                printf("Enter the value at %d %d", i, j);
                scanf("%d", &B[i][j]);
            }
        }

        printf(" data in ADD");
        for (i = 0; i < p; i++)
        {
            for (j = 0; j < q; j++)
            {

                Add[i][j] = A[i][j] + B[i][j];
                printf(" the value at %d %d is %d", i, j, Add[i][j]);
            }
            printf("\n");
        }

        printf(" data in MUL");
        for (i = 0; i < m; i++)
        {

            for (j = 0; j < q; j++){

                for (k = 0; k < p; k++)
                {

                 Mul[i][j]+= A[i][k] * B[k][j];
                
                 printf(" the value at %d %d is %d", i, j, Mul[i][j]);
                }
            }
            printf("\n");
        }

        printf("transpose B");
        for (i = 0; i < p; i++)
        {
            for (j = 0; j < q; j++)
            {

                Trans[i][j] = B[j][i];
                printf(" the value at %d %d is %d", i, j, Trans[i][j]);
            }
            printf("\n");
        }
    }
    return 0;
}
