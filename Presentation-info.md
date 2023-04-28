## Domain modeling

Summary Domain modeling is the process of creating a conceptual model for a
specific problem. And a domain model that's articulated well can verify and
validate your understanding of that problem.

Here's some tips to follow when building your own domain models.

1. When modeling a single entity that'll have many instances, build
   self-contained objects with the same attributes and behaviors.
2. Model its attributes with a constructor function that defines and initializes
   properties.
3. Model its behaviors with small methods that focus on doing one job well.
4. Create instances using the new keyword followed by a call to a constructor
   function.
5. Store the newly created object in a variable so you can access its properties
   and methods from outside.
6. Use the this variable within methods so you can access the object's
   properties and methods from inside.

#### What Does The Program Do?

(<a href="https://rkay301.medium.com/programming-fundamentals-part-two-the-problem-domain-how-to-design-a-program-application-4faf0a5753f8">https://rkay301.medium.com/programming-fundamentals-part-two-the-problem-domain-how-to-design-a-program-application-4faf0a5753f8)</a>  
The first step in determining the Problem Domain of a program is to ask yourself
what your application is supposed to do. Since the goal of this series is to
show you the process of thinking about, designing, and building programs, we
will choose a very simple problem for our hypothetical program to solve. For
this series, we will build a simple binomial expression calculator.

The first step in designing any program is to start by explaining what it does
in simple, written language. The technical term for this written explanation is
a “Problem Statement.” Now, as a complete beginner, I recall being worried about
whether or not my problem statements were perfect or not, and the truth is that
trying to determine the perfect problem statement (and by extension, problem
domain) on your first try, is a fool's errand.

Instead, use this process as a starting point which can be refined as new ideas
(or roadblocks) pop up during the design and build process of your program.
