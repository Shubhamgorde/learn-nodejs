- A cluster is a pool of similar workers running under a parent Node process. 
- Workers are spawned using the fork() method of the child_processes module
- This means workers can share server handles and use IPC (Inter-process communication) to communicate with the parent Node process.
- he master process is in charge of initiating workers and controlling them. You can create an arbitrary number of workers in your master process. Moreover, 
remember that by default incoming connections are distributed in a round-robin approach among workers (except in Windows).


Working:
RUn : localhost:3000/
When requests are received, they are distributed one at a time to each worker. If a worker is available, it immediately starts processing the request; otherwise it’ll be added to a queue.