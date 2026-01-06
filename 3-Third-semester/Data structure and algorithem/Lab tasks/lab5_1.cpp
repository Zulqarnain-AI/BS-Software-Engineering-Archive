							//lab5-1

#include<iostream>
using namespace std;
int que[100];
int rear=-1;
int front=-1;
void enque(int );
void deque();
void show();
main()
{
	int n1,n2,n3,n4;

	cout<<"enter the element of que \n";
	cin>>n1>>n2>>n3>>n4;
	enque(n1);
	enque(n2);
	enque(n3);
	enque(n4);
	deque();
	show();
}
void enque(int n)
{
	if(rear==99)
	cout<<"overflow";
	if(rear==-1)
	front=0;
	
	rear++;
	que[rear]=n;
}
void deque()
{
	if(front==-1||front>rear)
	{
		cout<<"empty";
	}
	front++;
}
void show()
{
	for(int i=front;i<=rear;i++)
	{
		cout<<que[i]<<endl;
	}
}
