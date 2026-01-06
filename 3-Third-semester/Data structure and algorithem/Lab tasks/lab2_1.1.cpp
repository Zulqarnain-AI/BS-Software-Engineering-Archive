		//lab2_1

#include <iostream>
using namespace std;
main()
{
	int arr[100];
	int n,num,pos;
	
	cout<<"enter number of elements you want to insert   ";
	cin>>n;
	
		cout <<"\nenter the position where you want to insert   ";//2
	cin>>pos;
	pos=pos-1;
	
	cout<<"\nenter the number you want to inset   ";
	cin>>num;
	
	cout<<"enter  elements of arry   ";
	for (int i=0;i<n;i++)
	{
		cin>>arr[i];
	}

	
	for (int i=n;i>pos;i--)//5
	{
		arr[i]=arr[i-1];
	}
	
	
	arr[pos]=num;
	
	n++;
	cout<<endl<<endl;
	for (int i=0;i<n;i++)
	{
		cout<<arr[i]<<endl;
	}
}
