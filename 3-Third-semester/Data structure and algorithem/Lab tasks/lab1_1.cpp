#include<iostream>
using namespace  std;
main()
{
int arr[5];
int a=0;
int b;
 for (int i=0;i<5;i++)
 {
 	cin>>arr[i];
	 }	
int n;
cout<<"enter a number  ";
cin>>n;

	 
	 for (int i=0;i<5;i++)
 {
 	if(n==arr[i])
 	{
 	a++;
 	b=i;
	 }
	 
	 }
	 if(a>0)
cout<<n<<"  is found at index  "<<b<<"\nthere are   "<<b<<"  elements before "<<b;

else
cout<<n<<"  is not found ";
}


