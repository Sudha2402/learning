//  When both dimensions are available globally (either as a macro or as a global constant).
#include <stdio.h>
const int M = 3; // OK
// const int M;//not show output if m is not assigned value
// int M;//not show output if m is not assigned value and even if arr[3][3] is assigned , it will not work
const int N = 3; // if this n is removed but arr[][3] 3 is kept then even after that N is undefined in int arr[M][N]

void print(int arr[M][N]) // note that the matrix can take only those parameter like m , n which is globally defined , if m and n not globally then leave it in matrix parameter and pass it seperately in parameters of function
{
  int i, j;
  for (i = 0; i < M; i++)
    for (j = 0; j < N; j++)
      printf("%d ", arr[i][j]);
}

// When only second dimension is available globally (either as a macro or as a global constant).pass m seperately
const int N2 = 3;

void print2(int arr[][N2], int m)
{
  int i, j;
  for (i = 0; i < m; i++)
    for (j = 0; j < N2; j++)
      printf("%d ", arr[i][j]);
}

//  Using a single pointer
void print3(int *arr, int m, int n)
{
  int i, j;

  for (i = 0; i < m; i++)
    for (j = 0; j < n; j++)
    {
      printf("%d ", *((arr + i * n) + j)); // arr+i*n is number of pointers it has read before//each pointer has same size the next pointer will be the next position according to pointer size all same and takes same space or bytes//pointer that have been passed
      // printf("\n(arr+i*n)+j : %d",((arr+i*n)+j));
      printf("\n(arr+i*n)+j : %p", ((arr + i * n) + j));
    }
}

/*
//all address differences is 41
(arr+i*n)+j : 63567242
(arr+i*n)+j : 63567283
(arr+i*n)+j : 63567324
(arr+i*n)+j : 63567365
(arr+i*n)+j : 63567406
(arr+i*n)+j : 63567447
(arr+i*n)+j : 63567488
(arr+i*n)+j : 63567529
(arr+i*n)+j : 6356756


(arr+i*n)+j : 0060FEF42
(arr+i*n)+j : 0060FEF83
(arr+i*n)+j : 0060FEFC4
(arr+i*n)+j : 0060FF005
(arr+i*n)+j : 0060FF046
(arr+i*n)+j : 0060FF087
(arr+i*n)+j : 0060FF0C8
(arr+i*n)+j : 0060FF109
(arr+i*n)+j : 0060FF14

*/

//  Using the concept of pointer to an array
const int M4 = 3;

void print4(int (*arr)[M4])
{
  int i, j;
  for (i = 0; i < M4; i++)
    for (j = 0; j < M4; j++)
      printf("%d ", arr[i][j]);
}

int main()
{
  int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
  // int arr[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};//if 3 is removed then it shows error even if N = 3; is globally defined
  // int arr[3][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};//if 3 is present or not even then it shows error always , only n is necessary in all


  // when arr[i][j] is to be printed in printfunction defined then always pass arr only wheater it's taking array pointer but pass (int *)arr  when to be print is *(arr+i*n+j) then use (int *)arr to pass as paramenter



  print(arr); // as M and N are globally defiend hence not needed to to pass anything

  printf("\n");

  print2(arr, 3); // print(int arr[][N], int m)

  printf("\n");

  int m = 3, n = 3;

  // We can also use "print3(&arr[0][0], m, n); //here [0][0] can be like [][] , it gives error initialization is necessary by putting any value" and "print3((int *)arr[0], m, n);"
// void print3(int *arr, int m, int n)
  print3((int *)arr, m, n);

  printf("\n");

  print4(arr);
  return 0;
}
