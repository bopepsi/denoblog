---
title: Linked list
publish_date: 2022-07-01
---

## What is data structure?
Data structure are collections of values, the relationships among them, and the functions or operations that can be applied to the data in the collection.<br>

There are many types of data  structures, such as arrays, objects, binary search trees, singly linked lists, doubly linked lists, undirected unweighted graphs, directed graphs, binary heaps, hash tables, queues, stacks and more. 

## Why so many?
Different data structures excel at different thing, some are highly specialized, others like arrays and objects are generally used. The more time you spend as a developer, the more likely you will need to use on of these advanced data structures. There is no best data structure, they all excel in different situations.

Work with map or location data? Use a graph.<br>
Web scraping nested HTML? Use a tree.<br>
Need an ordered list with fast insert/ removals at the start and end? Use a linked list!

## What is a linked list? 
A data structure that contains a head, tail and length property.<br>
A linked list consists of a bunch of nodes. A node can store any type of data, the node stored is ordered, but with no index pointing to each node. It also references to the next node. Or if it’s at the very end, there is no next node, it just references to null.<br>

The head is the beginning of the linked list, the tail is the end. We don’t keep track of every single item in the middle, we just keep track of the head, and from the head we can figure out next one, and next one until the end. We also keep track of the length to make thing easier.<br>

Remember there is no index for each node, we cannot access the node by index, if ew want to access something from the list, we start at the beginning. If we want the second to last item, we have to start from beginning for a singly linked list, or from the end for a doubly linked list.

In a singly linked list, each node is only connected one directionally to the next node.
In a doubly linked list, each node also have a connection to its previous node. However, it takes up more memory considering the extra pointer stored in nodes.

#### Compare with arrays
- Lists:
	- Do not have indexes
	- Connected via nodes with a next pointer
	- Random access is not allowed
- Arrays
	- Indexed in order
	- Expensive insertion and deletion
	- Have quick access at a specific index

## When use a linked list?
Linked lists are a great alternative to arrays when insertion and deletion at the beginning are frequently required.
The idea of a linked list structure that consists of nodes is the foundation for other structures like Stacks and Queues. For instance, Queue is a first in first out data structure, removing from the beginning is the key, so we can use singly linked lists instead of arrays here to reduce opreation time complexity.


#### BigO of singly linked lists and doubly linked lists
- Insertion - O(1)
- Removal - O(1) or O(N)
- Searching - O(N)
- Access - O(N)

<img href ="./sll.png"/>
<img href ="./dll.png"/>
<a href="https://github.com/bopepsi/linked-list">Singly linked list class</a>
