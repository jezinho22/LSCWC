const syntaxData = [
	{
		title: "console.log()",
		explanation:
			"The console.log() method is used to log or print messages to the console. It can also be used to print objects and other info.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hi there!</span><span class="dl">"</span><span class="p">);</span><span class="c1">// Prints: Hi there!</span></code></pre>',
	},
	{
		title: "Strings",
		explanation:
			"Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes \" .",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">single</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">Wheres my bandit hat?</span><span class="dl">\'</span><span class="p">;</span><span class="kd">let</span> <span class="nx">double</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Wheres my bandit hat?</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Numbers",
		explanation:
			"Numbers are a primitive data type. They include the set of all integers and floating point numbers.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">amount</span> <span class="o">=</span> <span class="mi">6</span><span class="p">;</span><span class="kd">let</span> <span class="nx">price</span> <span class="o">=</span> <span class="mf">4.99</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Boolean",
		explanation:
			"Booleans are a primitive data type. They can be either true or false .",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">lateToWork</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span><span class="kd">let</span> <span class="nx">isHoliday</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Null",
		explanation:
			"Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">x</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Arithmetic Operators",
		explanation: "JavaScript supports arithmetic operators for:",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Addition</span><span class="mi">5</span> <span class="o">+</span> <span class="mi">5</span><span class="p">;</span><span class="c1">// Subtraction</span><span class="mi">10</span> <span class="o">-</span> <span class="mi">5</span><span class="p">;</span><span class="c1">// Multiplication</span><span class="mi">5</span> <span class="o">*</span> <span class="mi">10</span><span class="p">;</span><span class="c1">// Division</span><span class="mi">10</span> <span class="o">/</span> <span class="mi">5</span><span class="p">;</span><span class="c1">// Modulo</span><span class="mi">10</span> <span class="o">%</span> <span class="mi">5</span><span class="p">;</span></code></pre>',
	},
	{
		title: "String.length",
		explanation:
			"The .length property of a string returns the number of characters that make up the string.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">message</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">good nite</span><span class="dl">"</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">message</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span><span class="c1">// Prints: 9</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">howdy</span><span class="dl">"</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span><span class="c1">// Prints: 5</span></code></pre>',
	},
	{
		title: "Methods",
		explanation:
			"Methods return information about an object, and are called by appending an instance with a period . , the method name, and parentheses.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Returns a number between 0 and 1</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></code></pre>',
	},
	{
		title: "Libraries",
		explanation:
			"Libraries contain methods that can be called by appending the library name with a period . , the method name, and a set of parentheses.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Returns a number between 0 and 1</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></code></pre>',
	},
	{
		title: "Math.random()",
		explanation:
			"The Math.random() function returns a floating-point random number in the range from 0 (inclusive) up to but not including 1.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Returns a number between 0 and 1</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></code></pre>',
	},
	{
		title: "Math.floor()",
		explanation:
			"The Math.floor() function returns the largest integer less than or equal to the given number.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="mf">5.95</span><span class="p">));</span><span class="c1">// Prints: 5</span></code></pre>',
	},
	{
		title: "Single Line Comments",
		explanation:
			"In JavaScript, single-line comments are created with two consecutive forward slashes // .",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// This line will denote a comment</span></code></pre>',
	},
	{
		title: "Multi-line Comments",
		explanation:
			"In JavaScript, multi-line comments are created by surrounding the lines with /* at the beginning and */ at the end. Comments are good ways for a variety of reasons like explaining a code block or indicating some hints, etc.",
		example:
			'<pre class="highlight javascript"><code><span class="cm">/*The below configuration must bechanged before deployment.*/</span><span class="kd">let</span> <span class="nx">baseUrl</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">https://google.com/</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Variables",
		explanation:
			"A variable is a container for data that is stored in computer memory. It is referenced by a descriptive name that a programmer can call to assign a specific value and retrieve it.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// examples of variables</span><span class="kd">let</span> <span class="nx">name</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Tammy</span><span class="dl">"</span><span class="p">;</span><span class="kd">const</span> <span class="nx">found</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span><span class="kd">var</span> <span class="nx">age</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">found</span><span class="p">,</span> <span class="nx">age</span><span class="p">);</span><span class="c1">// Tammy, false, 3</span></code></pre>',
	},
	{
		title: "const Keyword",
		explanation:
			"A constant variable can be declared using the keyword const . It must have an assignment. Any attempt of reassigning a const variable will result in JavaScript runtime error.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">numberOfColumns</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span><span class="nx">numberOfColumns</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span><span class="c1">// TypeError: Assignment to constant variable.</span></code></pre>',
	},
	{
		title: "let Keyword",
		explanation:
			"let creates a local variable in JavaScript & can be reassigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">count</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">count</span><span class="p">);</span> <span class="c1">// Prints: undefined</span><span class="nx">count</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">count</span><span class="p">);</span> <span class="c1">// Prints: 10</span></code></pre>',
	},
	{
		title: "Undefined",
		explanation:
			"undefined is a primitive JavaScript value that represents lack of defined value. Variables that are declared but not initialize to a vale will have the value undefined.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">a</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="c1">// Prints: undefined</span></code></pre>',
	},
	{
		title: "Assignment Operators",
		explanation:
			"An assignment operator assigns a value to its left operand based on the value of its right operand. Here are some of them:",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">number</span> <span class="o">=</span> <span class="mi">100</span><span class="p">;</span><span class="c1">// Both statements will add 10</span><span class="nx">number</span> <span class="o">=</span> <span class="nx">number</span> <span class="o">+</span> <span class="mi">10</span><span class="p">;</span><span class="nx">number</span> <span class="o">+=</span> <span class="mi">10</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">number</span><span class="p">);</span><span class="c1">// Prints: 120</span></code></pre>',
	},
	{
		title: "String Concatenation",
		explanation:
			"In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">service</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">credit card</span><span class="dl">\'</span><span class="p">;</span><span class="kd">let</span> <span class="nx">month</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">May 30th</span><span class="dl">\'</span><span class="p">;</span><span class="kd">let</span> <span class="nx">displayText</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">Your </span><span class="dl">\'</span> <span class="o">+</span> <span class="nx">service</span> <span class="o">+</span> <span class="dl">\'</span><span class="s1"> billis due on </span><span class="dl">\'</span> <span class="o">+</span> <span class="nx">month</span> <span class="o">+</span> <span class="dl">\'</span><span class="s1">.</span><span class="dl">\'</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">displayText</span><span class="p">);</span><span class="c1">// Prints: Your credit card bill is due on May 30th.</span></code></pre>',
	},
	{
		title: "String Interpolation",
		explanation:
			"String interpolation is the process of evaluating string literals containing one or more placeholders (expressions, variables, etc). It can be performed using template literals: text ${expression} text.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">age</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span><span class="c1">// String concatenation</span><span class="dl">"</span><span class="s2">Tommy is </span><span class="dl">"</span> <span class="o">+</span> <span class="nx">age</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> years old.</span><span class="dl">"</span><span class="p">;</span><span class="c1">// String interpolation</span><span class="s2">`Tommy is </span><span class="p">${</span><span class="nx">age</span><span class="p">}</span><span class="s2"> years old.`</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Template Literals",
		explanation:
			"Template literals are strings that allow embedded expressions, ${expression} . While regular strings use single ' or double \" quotes, template literals use backticks instead.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">name</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Codecademy</span><span class="dl">"</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`Hello, </span><span class="p">${</span><span class="nx">name</span><span class="p">}</span><span class="s2">`</span><span class="p">);</span><span class="c1">// Prints: Hello, Codecademy</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`Billy is </span><span class="p">${</span><span class="mi">6</span> <span class="o">+</span> <span class="mi">8</span><span class="p">}</span><span class="s2"> years old.`</span><span class="p">);</span><span class="c1">// Prints: Billy is 14 years old.</span></code></pre>',
	},
	{
		title: "Control Flow",
		explanation:
			"Control 􀄳ow is the order in which statements are executed in a program. The default control 􀄳ow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file.",
		example:
			'<pre class="highlight javascript"><code><span class="mi">1</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">3</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">250</span> <span class="o">&gt;=</span> <span class="mi">250</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// true</span></code></pre>',
	},
	{
		title: "Truthy and Falsy",
		explanation:
			"In JavaScript, values evaluate to true or false when evaluated as Booleans.",
		example:
			'<pre class="highlight javascript"><code><span class="mi">1</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">3</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">250</span> <span class="o">&gt;=</span> <span class="mi">250</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// true</span></code></pre>',
	},
	{
		title: "Comparison Operators",
		explanation:
			"Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison:",
		example:
			'<pre class="highlight javascript"><code><span class="mi">1</span> <span class="o">&gt;</span> <span class="mi">3</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">3</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">250</span> <span class="o">&gt;=</span> <span class="mi">250</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// true</span><span class="mi">1</span> <span class="o">===</span> <span class="mi">2</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// false</span><span class="mi">1</span> <span class="o">==</span> <span class="dl">"</span><span class="s2">1</span><span class="dl">"</span><span class="p">;</span> <span class="c1">// true</span></code></pre>',
	},
	{
		title: "if Statement",
		explanation:
			"An if statement accepts an expression with a set of parentheses:",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">isMailSent</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span><span class="k">if</span> <span class="p">(</span><span class="nx">isMailSent</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Mail sent to recipient</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span></code></pre>',
	},
	{
		title: "if...else Statement",
		explanation:
			"An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">isTaskCompleted</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span><span class="k">if</span> <span class="p">(</span><span class="nx">isTaskCompleted</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Task completed</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span> <span class="k">else</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Task incomplete</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span></code></pre>',
	},
	{
		title: "else if Clause",
		explanation:
			"After an initial if block, else if blocks can each check an additional condition. An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">size</span> <span class="o">=</span> <span class="mi">10</span><span class="p">;</span><span class="k">if</span> <span class="p">(</span><span class="nx">size</span> <span class="o">&gt;</span> <span class="mi">100</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Big</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">size</span> <span class="o">&gt;</span> <span class="mi">20</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Medium</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">size</span> <span class="o">&gt;</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Small</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span> <span class="k">else</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Tiny</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span><span class="c1">// Print: Small</span></code></pre>',
	},
	{
		title: "Logical NOT Operator",
		explanation:
			"The logical NOT operator ! can be used to do one of the following:",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">lateToWork</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span><span class="kd">let</span> <span class="nx">oppositeValue</span> <span class="o">=</span> <span class="o">!</span><span class="nx">lateToWork</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">oppositeValue</span><span class="p">);</span><span class="c1">// Prints: false</span></code></pre>',
	},
	{
		title: "Logical AND Operator",
		explanation:
			"The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true . If one, or both, of the values is falsy, then it returns false.",
		example: "No code example",
	},
	{
		title: "Logical OR Operator",
		explanation:
			"The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true . If both values are falsy, it returns false .",
		example: "No code example",
	},
	{
		title: "switch Statement",
		explanation:
			"The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed. The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">food</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">salad</span><span class="dl">"</span><span class="p">;</span><span class="k">switch</span> <span class="p">(</span><span class="nx">food</span><span class="p">)</span> <span class="p">{</span>  <span class="k">case</span> <span class="dl">"</span><span class="s2">oyster</span><span class="dl">"</span><span class="p">:</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">The taste of the sea 🦪</span><span class="dl">"</span><span class="p">);</span>    <span class="k">break</span><span class="p">;</span>  <span class="k">case</span> <span class="dl">"</span><span class="s2">pizza</span><span class="dl">"</span><span class="p">:</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">A delicious pie 🍕</span><span class="dl">"</span><span class="p">);</span>    <span class="k">break</span><span class="p">;</span>  <span class="nl">default</span><span class="p">:</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Enjoy your meal</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span><span class="c1">// Prints: Enjoy your meal</span></code></pre>',
	},
	{
		title: "Ternary Operator",
		explanation:
			"The ternary operator allows for a compact syntax in the case of binary (choosing between two choices) decisions. It accepts a condition followed by a ? operator, and then two expressions separated by a : . If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">price</span> <span class="o">=</span> <span class="mf">10.5</span><span class="p">;</span><span class="kd">let</span> <span class="nx">day</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Monday</span><span class="dl">"</span><span class="p">;</span><span class="nx">day</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">Monday</span><span class="dl">"</span> <span class="p">?</span> <span class="p">(</span><span class="nx">price</span> <span class="o">-=</span> <span class="mf">1.5</span><span class="p">)</span> <span class="p">:</span> <span class="p">(</span><span class="nx">price</span> <span class="o">+=</span> <span class="mf">1.5</span><span class="p">);</span><span class="c1">// Price will be 9</span></code></pre>',
	},
	{
		title: "Calling Functions",
		explanation:
			"Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Defining the function</span><span class="kd">function</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">num1</span> <span class="o">+</span> <span class="nx">num2</span><span class="p">;</span><span class="p">}</span><span class="c1">// Calling the function</span><span class="nx">sum</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span> <span class="c1">// 6</span></code></pre>',
	},
	{
		title: "Function Parameters",
		explanation:
			"Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the values of whatever is passed in as arguments. It is possible to define a function without parameters.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// The parameter is name</span><span class="kd">function</span> <span class="nx">sayHello</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="s2">`Hello, </span><span class="p">${</span><span class="nx">name</span><span class="p">}</span><span class="s2">!`</span><span class="p">;</span><span class="p">}</span><span class="c1">// function without parameter</span><span class="kd">function</span> <span class="nx">sayHello</span><span class="p">()</span> <span class="p">{</span>  <span class="k">return</span> <span class="s2">`Hello, World!`</span><span class="p">;</span><span class="p">}</span></code></pre>',
	},
	{
		title: "return Keyword",
		explanation:
			"Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword in which case the function will return undefined by default.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// With return</span><span class="kd">function</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">num1</span> <span class="o">+</span> <span class="nx">num2</span><span class="p">;</span><span class="p">}</span><span class="c1">// Without return, so the function doesn\'t output the sum</span><span class="kd">function</span> <span class="nx">sum</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">num1</span> <span class="o">+</span> <span class="nx">num2</span><span class="p">;</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Function Declaration",
		explanation:
			"Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:",
		example:
			'<pre class="highlight javascript"><code><span class="kd">function</span> <span class="nx">add</span><span class="p">(</span><span class="nx">num1</span><span class="p">,</span> <span class="nx">num2</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">num1</span> <span class="o">+</span> <span class="nx">num2</span><span class="p">;</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Anonymous Functions",
		explanation:
			"Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Named function</span><span class="kd">function</span> <span class="nx">rocketToMars</span><span class="p">()</span> <span class="p">{</span>  <span class="k">return</span> <span class="dl">"</span><span class="s2">BOOM!</span><span class="dl">"</span><span class="p">;</span><span class="p">}</span><span class="c1">// Anonymous function</span><span class="kd">const</span> <span class="nx">rocketToMars</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>  <span class="k">return</span> <span class="dl">"</span><span class="s2">BOOM!</span><span class="dl">"</span><span class="p">;</span><span class="p">};</span></code></pre>',
	},
	{
		title: "Arrow Functions",
		explanation:
			"Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body. There are several variations of arrow functions:",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Arrow function with two arguments</span><span class="kd">const</span> <span class="nx">sum</span> <span class="o">=</span> <span class="p">(</span><span class="nx">firstParam</span><span class="p">,</span> <span class="nx">secondParam</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">firstParam</span> <span class="o">+</span> <span class="nx">secondParam</span><span class="p">;</span><span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">sum</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">));</span> <span class="c1">// Prints: 7</span><span class="c1">// Arrow function with no arguments</span><span class="kd">const</span> <span class="nx">printHello</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">hello</span><span class="dl">"</span><span class="p">);</span><span class="p">};</span><span class="nx">printHello</span><span class="p">();</span> <span class="c1">// Prints: hello</span><span class="c1">// Arrow functions with a single argument</span><span class="kd">const</span> <span class="nx">checkWeight</span> <span class="o">=</span> <span class="p">(</span><span class="nx">weight</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`Baggage weight : </span><span class="p">${</span><span class="nx">weight</span><span class="p">}</span><span class="s2"> kilograms.`</span><span class="p">);</span><span class="p">};</span><span class="nx">checkWeight</span><span class="p">(</span><span class="mi">25</span><span class="p">);</span> <span class="c1">// Prints: Baggage weight : 25 kilograms.</span><span class="c1">// Concise arrow functions</span><span class="kd">const</span> <span class="nx">multiply</span> <span class="o">=</span> <span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">a</span> <span class="o">*</span> <span class="nx">b</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">multiply</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">30</span><span class="p">));</span> <span class="c1">// Prints: 60</span></code></pre>',
	},
	{
		title: "Block Scoped Variables",
		explanation:
			"const and let are block scoped variables, meaning they are only accessible in their block or nested blocks. In the given code block, trying to print the statusMessage using the console.log() method will result in a ReferenceError . It is accessible only inside that if block.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">isLoggedIn</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span><span class="k">if</span> <span class="p">(</span><span class="nx">isLoggedIn</span> <span class="o">==</span> <span class="kc">true</span><span class="p">)</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">statusMessage</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">User is logged in.</span><span class="dl">"</span><span class="p">;</span><span class="p">}</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">statusMessage</span><span class="p">);</span><span class="c1">// Uncaught ReferenceError: statusMessage is not defined</span></code></pre>',
	},
	{
		title: "Global Variables",
		explanation:
			"JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Variable declared globally</span><span class="kd">const</span> <span class="nx">color</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">blue</span><span class="dl">"</span><span class="p">;</span><span class="kd">function</span> <span class="nx">printColor</span><span class="p">()</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">color</span><span class="p">);</span><span class="p">}</span><span class="nx">printColor</span><span class="p">();</span> <span class="c1">// Prints: blue</span></code></pre>',
	},
	{
		title: "Index",
		explanation:
			"Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index surrounded by square brackets [].",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Accessing an array element</span><span class="kd">const</span> <span class="nx">myArray</span> <span class="o">=</span> <span class="p">[</span><span class="mi">100</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="mi">300</span><span class="p">];</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">myArray</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span> <span class="c1">// 100</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">myArray</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span> <span class="c1">// 200</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">myArray</span><span class="p">[</span><span class="mi">2</span><span class="p">]);</span> <span class="c1">// 300</span></code></pre>',
	},
	{
		title: "Property .length",
		explanation:
			"The .length property of a JavaScript array indicatesthe number of elements the array contains.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">numbers</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">];</span><span class="nx">numbers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="c1">// 4</span></code></pre>',
	},
	{
		title: "Method .push()",
		explanation:
			"The .push() method of JavaScript arrays can be used to add one or more elements to the end of an array. .push() mutates the original array returns the new length of the array.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Adding a single element:</span><span class="kd">const</span> <span class="nx">cart</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">apple</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">orange</span><span class="dl">"</span><span class="p">];</span><span class="nx">cart</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">pear</span><span class="dl">"</span><span class="p">);</span><span class="c1">// Adding multiple elements:</span><span class="kd">const</span> <span class="nx">numbers</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">];</span><span class="nx">numbers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="mi">5</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Method .pop()",
		explanation:
			"The .pop() method removes the last element from anarray and returns that element.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">ingredients</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">eggs</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">flour</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">chocolate</span><span class="dl">"</span><span class="p">];</span><span class="kd">const</span> <span class="nx">poppedIngredient</span> <span class="o">=</span> <span class="nx">ingredients</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span> <span class="c1">// ("chocolate");</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">ingredients</span><span class="p">);</span> <span class="c1">// ["eggs", "flour"]</span></code></pre>',
	},
	{
		title: "Mutable",
		explanation:
			"JavaScript arrays are mutable, meaning that the values they contain can be changed.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">names</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Alice</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Bob</span><span class="dl">"</span><span class="p">];</span><span class="nx">names</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="dl">"</span><span class="s2">Carl</span><span class="dl">"</span><span class="p">);</span><span class="c1">// ["Alice", "Bob", "Carl"]</span></code></pre>',
	},
	{
		title: "for loop",
		explanation:
			"A for loop declares looping instructions, with three important pieces of information separated by semicolons ;",
		example:
			'<pre class="highlight javascript"><code><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span><span class="p">}</span><span class="c1">// Output: 0, 1, 2</span></code></pre>',
	},
	{
		title: "Reverse Loop",
		explanation:
			"A for loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">items</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">apricot</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">banana</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">cherry</span><span class="dl">"</span><span class="p">];</span><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="nx">items</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">-=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">i</span><span class="p">}</span><span class="s2">. </span><span class="p">${</span><span class="nx">items</span><span class="p">[</span><span class="nx">i</span><span class="p">]}</span><span class="s2">`</span><span class="p">);</span><span class="p">}</span><span class="c1">// Prints: 2. cherry</span><span class="c1">// Prints: 1. banana</span><span class="c1">// Prints: 0. apricot</span></code></pre>',
	},
	{
		title: "Looping Through Arrays",
		explanation:
			"An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.",
		example:
			'<pre class="highlight javascript"><code><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">array</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">array</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span><span class="p">}</span><span class="c1">// Output: Every item in the array</span></code></pre>',
	},
	{
		title: "Nested For Loop",
		explanation:
			"A nested for loop is when a for loop runs inside another for loop. The inner loop will run all its iterations for each iteration of the outer loop.",
		example:
			'<pre class="highlight javascript"><code><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">outer</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">outer</span> <span class="o">&lt;</span> <span class="mi">2</span><span class="p">;</span> <span class="nx">outer</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">inner</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">inner</span> <span class="o">&lt;</span> <span class="mi">3</span><span class="p">;</span> <span class="nx">inner</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">outer</span><span class="p">}</span><span class="s2">-</span><span class="p">${</span><span class="nx">inner</span><span class="p">}</span><span class="s2">`</span><span class="p">);</span>  <span class="p">}</span><span class="p">}</span><span class="cm">/*Output:0-00-10-21-01-11-2*/</span></code></pre>',
	},
	{
		title: "While Loop",
		explanation:
			"The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before th loop, and usually some variable is incremented or altered in the while loop body to determine when the loop should stop.",
		example:
			'<pre class="highlight javascript"><code><span class="k">while</span> <span class="p">(</span><span class="nx">condition</span><span class="p">)</span> <span class="p">{</span>  <span class="c1">// code block to be executed</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Do…While Statement",
		explanation:
			"A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">x</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span><span class="k">do</span> <span class="p">{</span>  <span class="nx">x</span> <span class="o">=</span> <span class="nx">x</span> <span class="o">+</span> <span class="nx">i</span><span class="p">;</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">x</span><span class="p">);</span>  <span class="nx">i</span><span class="o">++</span><span class="p">;</span><span class="p">}</span> <span class="k">while</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">5</span><span class="p">);</span><span class="c1">// Prints: 0 1 3 6 10</span></code></pre>',
	},
	{
		title: "break Keyword",
		explanation:
			"Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.",
		example:
			'<pre class="highlight javascript"><code><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="mi">99</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span>  <span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="mi">5</span><span class="p">)</span> <span class="p">{</span>    <span class="k">break</span><span class="p">;</span>  <span class="p">}</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span><span class="p">}</span><span class="c1">// Output: 0 1 2 3 4 5</span></code></pre>',
	},
	{
		title: "Functions Assigned to Variables",
		explanation:
			"In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different form all other data types because they can be invoked.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">plusFive</span> <span class="o">=</span> <span class="p">(</span><span class="nx">number</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">number</span> <span class="o">+</span> <span class="mi">5</span><span class="p">;</span><span class="p">};</span><span class="c1">// f is assigned the value of plusFive</span><span class="kd">let</span> <span class="nx">f</span> <span class="o">=</span> <span class="nx">plusFive</span><span class="p">;</span><span class="nx">plusFive</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span> <span class="c1">// 8</span><span class="c1">// Since f has a function value, it can be invoked.</span><span class="nx">f</span><span class="p">(</span><span class="mi">9</span><span class="p">);</span> <span class="c1">// 14</span></code></pre>',
	},
	{
		title: "Higher-Order Functions",
		explanation:
			"In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">isEven</span> <span class="o">=</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">n</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span><span class="p">};</span><span class="kd">let</span> <span class="nx">printMsg</span> <span class="o">=</span> <span class="p">(</span><span class="nx">evenFunc</span><span class="p">,</span> <span class="nx">num</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">isNumEven</span> <span class="o">=</span> <span class="nx">evenFunc</span><span class="p">(</span><span class="nx">num</span><span class="p">);</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`The number </span><span class="p">${</span><span class="nx">num</span><span class="p">}</span><span class="s2"> is an evennumber: </span><span class="p">${</span><span class="nx">isNumEven</span><span class="p">}</span><span class="s2">.`</span><span class="p">);</span><span class="p">};</span><span class="c1">// Pass in isEven as the callback function</span><span class="nx">printMsg</span><span class="p">(</span><span class="nx">isEven</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span><span class="c1">// Prints: The number 4 is an even number: True.</span></code></pre>',
	},
	{
		title: "Callback Functions",
		explanation:
			"In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">isEven</span> <span class="o">=</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">n</span> <span class="o">%</span> <span class="mi">2</span> <span class="o">==</span> <span class="mi">0</span><span class="p">;</span><span class="p">};</span><span class="kd">let</span> <span class="nx">printMsg</span> <span class="o">=</span> <span class="p">(</span><span class="nx">evenFunc</span><span class="p">,</span> <span class="nx">num</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">isNumEven</span> <span class="o">=</span> <span class="nx">evenFunc</span><span class="p">(</span><span class="nx">num</span><span class="p">);</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`The number </span><span class="p">${</span><span class="nx">num</span><span class="p">}</span><span class="s2"> is an evennumber: </span><span class="p">${</span><span class="nx">isNumEven</span><span class="p">}</span><span class="s2">.`</span><span class="p">);</span><span class="p">};</span><span class="c1">// Pass in isEven as the callback function</span><span class="nx">printMsg</span><span class="p">(</span><span class="nx">isEven</span><span class="p">,</span> <span class="mi">4</span><span class="p">);</span><span class="c1">// Prints: The number 4 is an even number: True.</span></code></pre>',
	},
	{
		title: "Array Method .forEach()",
		explanation:
			"The .forEach() method executes a callback function on each of the elements in an array in order. Here, the callback function containing a console.log() method will be executed 5 times, once for each element.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">numbers</span> <span class="o">=</span> <span class="p">[</span><span class="mi">28</span><span class="p">,</span> <span class="mi">77</span><span class="p">,</span> <span class="mi">45</span><span class="p">,</span> <span class="mi">99</span><span class="p">,</span> <span class="mi">27</span><span class="p">];</span><span class="nx">numbers</span><span class="p">.</span><span class="nx">forEach</span><span class="p">((</span><span class="nx">number</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">number</span><span class="p">);</span><span class="p">});</span></code></pre>',
	},
	{
		title: "Array Method .map()",
		explanation:
			"The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">finalParticipants</span> <span class="o">=</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Taylor</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Donald</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Don</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Natasha</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">Bobby</span><span class="dl">"</span><span class="p">];</span><span class="kd">const</span> <span class="nx">announcements</span> <span class="o">=</span> <span class="nx">finalParticipants</span><span class="p">.</span><span class="nx">map</span><span class="p">((</span><span class="nx">member</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">member</span> <span class="o">+</span> <span class="dl">"</span><span class="s2"> joined the contest.</span><span class="dl">"</span><span class="p">;</span><span class="p">});</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">announcements</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Array Method .filter()",
		explanation:
			"The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true. Here, the array filteredArray will contain all the elements of randomNumbers but 4 .",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">randomNumbers</span> <span class="o">=</span> <span class="p">[</span><span class="mi">4</span><span class="p">,</span> <span class="mi">11</span><span class="p">,</span> <span class="mi">42</span><span class="p">,</span> <span class="mi">14</span><span class="p">,</span> <span class="mi">39</span><span class="p">];</span><span class="kd">const</span> <span class="nx">filteredArray</span> <span class="o">=</span> <span class="nx">randomNumbers</span><span class="p">.</span><span class="nx">filter</span><span class="p">((</span><span class="nx">n</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">n</span> <span class="o">&gt;</span> <span class="mi">5</span><span class="p">;</span><span class="p">});</span></code></pre>',
	},
	{
		title: "Array Method .reduce()",
		explanation:
			"The .reduce() method iterates through an array and returns a single value. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator. Here, the .reduce() method will sum all the elements of the array.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">arrayOfNumbers</span> <span class="o">=</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">];</span><span class="kd">const</span> <span class="nx">sum</span> <span class="o">=</span> <span class="nx">arrayOfNumbers</span><span class="p">.</span><span class="nx">reduce</span><span class="p">((</span><span class="nx">accumulator</span><span class="p">,</span> <span class="nx">currentValue</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">accumulator</span> <span class="o">+</span> <span class="nx">currentValue</span><span class="p">;</span><span class="p">});</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">sum</span><span class="p">);</span> <span class="c1">// 10</span></code></pre>',
	},
	{
		title: "Properties and values of a JavaScript object",
		explanation:
			"A JavaScript object literal is enclosed with curly braces {} . Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not. Key-value pairs of an object are also referred to as properties.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">classOf2018</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">students</span><span class="p">:</span> <span class="mi">38</span><span class="p">,</span>  <span class="na">year</span><span class="p">:</span> <span class="mi">2018</span><span class="p">,</span><span class="p">};</span></code></pre>',
	},
	{
		title: "Restrictions in Naming Properties",
		explanation:
			"JavaScript object key names must adhere to some restrictions to be valid. Key names must either be strings or valid identifier or variable names (i.e. special characters such as - are not allowed in key names that are not strings).",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Example of invalid key names</span><span class="kd">const</span> <span class="nx">trainSchedule</span> <span class="o">=</span> <span class="p">{</span>    <span class="nx">platform</span> <span class="na">num</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span> <span class="c1">// Invalid because of the space between words.</span>    <span class="mi">40</span> <span class="o">-</span> <span class="mi">10</span> <span class="o">+</span> <span class="mi">2</span><span class="p">:</span> <span class="mi">30</span><span class="p">,</span>  <span class="c1">// Expressions cannot be keys.</span>    <span class="o">+</span><span class="na">compartment</span><span class="p">:</span> <span class="dl">\'</span><span class="s1">C</span><span class="dl">\'</span> <span class="c1">// The use of a + sign is invalid unless it is enclosed in quotations.</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Dot Notation for Accessing Object Properties",
		explanation:
			"Properties of a JavaScript object can be accessed using the dot notation in this manner:",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">apple</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Green</span><span class="dl">"</span><span class="p">,</span>  <span class="na">price</span><span class="p">:</span> <span class="p">{</span>    <span class="na">bulk</span><span class="p">:</span> <span class="dl">"</span><span class="s2">$3/kg</span><span class="dl">"</span><span class="p">,</span>    <span class="na">smallQty</span><span class="p">:</span> <span class="dl">"</span><span class="s2">$4/kg</span><span class="dl">"</span><span class="p">,</span>  <span class="p">},</span><span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">apple</span><span class="p">.</span><span class="nx">color</span><span class="p">);</span> <span class="c1">// "Green"</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">apple</span><span class="p">.</span><span class="nx">price</span><span class="p">.</span><span class="nx">bulk</span><span class="p">);</span> <span class="c1">// "$3/kg"</span></code></pre>',
	},
	{
		title: "Delete operator",
		explanation:
			"Once an object is created in JavaScript, it is possible to remove properties from the object using the delete operator. The delete keyword deletes both the value of the property and the property itself from the object. The delete operator only works on properties, not on variables or functions.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">person</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">firstName</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Matilda</span><span class="dl">"</span><span class="p">,</span>  <span class="na">age</span><span class="p">:</span> <span class="mi">27</span><span class="p">,</span>  <span class="na">hobby</span><span class="p">:</span> <span class="dl">"</span><span class="s2">knitting</span><span class="dl">"</span><span class="p">,</span>  <span class="na">goal</span><span class="p">:</span> <span class="dl">"</span><span class="s2">learning JavaScript</span><span class="dl">"</span><span class="p">,</span><span class="p">};</span><span class="k">delete</span> <span class="nx">person</span><span class="p">.</span><span class="nx">hobby</span><span class="p">;</span> <span class="c1">// or delete person[hobby];</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">person</span><span class="p">);</span><span class="cm">/*{  firstName: "Matilda"  age: 27  goal: "learning JavaScript"}*/</span></code></pre>',
	},
	{
		title: "Accessing non-existent JavaScript properties",
		explanation:
			"When trying to access a JavaScript object property thathas not been defined yet, the value of undefined will be returned by default.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">classElection</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">date</span><span class="p">:</span> <span class="dl">"</span><span class="s2">January 12</span><span class="dl">"</span><span class="p">,</span><span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">classElection</span><span class="p">.</span><span class="nx">place</span><span class="p">);</span> <span class="c1">// undefined</span></code></pre>',
	},
	{
		title: "JavaScript Objects are Mutable",
		explanation:
			"JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted. It is the reference to the object, bound to the variable, that cannot be changed.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">student</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Sheldon</span><span class="dl">"</span><span class="p">,</span>  <span class="na">score</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>  <span class="na">grade</span><span class="p">:</span> <span class="dl">"</span><span class="s2">A</span><span class="dl">"</span><span class="p">,</span><span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">student</span><span class="p">);</span><span class="c1">// { name: "Sheldon", score: 100, grade: "A" }</span><span class="k">delete</span> <span class="nx">student</span><span class="p">.</span><span class="nx">score</span><span class="p">;</span><span class="nx">student</span><span class="p">.</span><span class="nx">grade</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">F</span><span class="dl">"</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">student</span><span class="p">);</span><span class="c1">// { name: "Sheldon", grade: "F" }</span><span class="nx">student</span> <span class="o">=</span> <span class="p">{};</span><span class="c1">// TypeError: Assignment to constant variable</span></code></pre>',
	},
	{
		title: "JavaScript Object Methods",
		explanation:
			"JavaScript objects may have property values that are functions. These are referred to as object methods. Methods may be defined using anonymous functions arrow function expression, or with shorthand method syntax. Object methods are invoked with the syntax: objectName.methodName(arguments)",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">engine</span> <span class="o">=</span> <span class="p">{</span>  <span class="c1">// method shorthand, with one argument</span>  <span class="nx">start</span><span class="p">(</span><span class="nx">adverb</span><span class="p">)</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`The engine starts up </span><span class="p">${</span><span class="nx">adverb</span><span class="p">}</span><span class="s2">...`</span><span class="p">);</span>  <span class="p">},</span>  <span class="c1">// anonymous arrow function expression with no arguments</span>  <span class="na">sputter</span><span class="p">:</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">The engine sputters...</span><span class="dl">"</span><span class="p">);</span>  <span class="p">},</span><span class="p">};</span><span class="nx">engine</span><span class="p">.</span><span class="nx">start</span><span class="p">(</span><span class="dl">"</span><span class="s2">noisily</span><span class="dl">"</span><span class="p">);</span><span class="nx">engine</span><span class="p">.</span><span class="nx">sputter</span><span class="p">();</span><span class="cm">/* Console output:The engine starts up noisily...The engine sputters...*/</span></code></pre>',
	},
	{
		title: "Javascript passing objects as arguments",
		explanation:
			"When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">origNum</span> <span class="o">=</span> <span class="mi">8</span><span class="p">;</span><span class="kd">const</span> <span class="nx">origObj</span> <span class="o">=</span> <span class="p">{</span> <span class="na">color</span><span class="p">:</span> <span class="dl">"</span><span class="s2">blue</span><span class="dl">"</span> <span class="p">};</span><span class="kd">const</span> <span class="nx">changeItUp</span> <span class="o">=</span> <span class="p">(</span><span class="nx">num</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">num</span> <span class="o">=</span> <span class="mi">7</span><span class="p">;</span>  <span class="nx">obj</span><span class="p">.</span><span class="nx">color</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">red</span><span class="dl">"</span><span class="p">;</span><span class="p">};</span><span class="nx">changeItUp</span><span class="p">(</span><span class="nx">origNum</span><span class="p">,</span> <span class="nx">origObj</span><span class="p">);</span><span class="c1">// Will output 8 since integers are passed by value.</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">origNum</span><span class="p">);</span><span class="c1">// Will output \'red\' since objects are passed</span><span class="c1">// by reference and are therefore mutable.</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">origObj</span><span class="p">.</span><span class="nx">color</span><span class="p">);</span></code></pre>',
	},
	{
		title: "JavaScript for...in loop",
		explanation:
			"The JavaScript for...in loop can be used to iterate over the keys of an object. In each iteration, one of the properties from the object is assigned to the variable of that loop.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">mobile</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">brand</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Samsung</span><span class="dl">"</span><span class="p">,</span>  <span class="na">model</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Galaxy Note 9</span><span class="dl">"</span><span class="p">,</span><span class="p">};</span><span class="k">for</span> <span class="p">(</span><span class="kd">let</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">mobile</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">`</span><span class="p">${</span><span class="nx">key</span><span class="p">}</span><span class="s2">: </span><span class="p">${</span><span class="nx">mobile</span><span class="p">[</span><span class="nx">key</span><span class="p">]}</span><span class="s2">`</span><span class="p">);</span><span class="p">}</span></code></pre>',
	},
	{
		title: "this Keyword",
		explanation:
			"The reserved keyword this refers to a method’s calling object, and it can be used to access properties belonging to that object.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">cat</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Goose</span><span class="dl">"</span><span class="p">,</span>  <span class="na">age</span><span class="p">:</span> <span class="mi">8</span><span class="p">,</span>  <span class="nx">whatName</span><span class="p">()</span> <span class="p">{</span>    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span>  <span class="p">},</span><span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">cat</span><span class="p">.</span><span class="nx">whatName</span><span class="p">());</span><span class="c1">// Output: Goose</span></code></pre>',
	},
	{
		title: "Javascript function this",
		explanation:
			"Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object this will refer to the global object (window in browser, global in Node.js).",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">restaurant</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">numCustomers</span><span class="p">:</span> <span class="mi">45</span><span class="p">,</span>  <span class="na">seatCapacity</span><span class="p">:</span> <span class="mi">100</span><span class="p">,</span>  <span class="nx">availableSeats</span><span class="p">()</span> <span class="p">{</span>    <span class="c1">// this refers to the restaurant object</span>    <span class="c1">// and it\'s used to access its properties</span>    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">seatCapacity</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">numCustomers</span><span class="p">;</span>  <span class="p">},</span><span class="p">};</span></code></pre>',
	},
	{
		title: "JavaScript Arrow Function this Scope",
		explanation:
			"JavaScript arrow functions do not have their own this context, but use the this of the surrounding lexical context. Thus, they are generally a poor choice for writing object methods.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">myObj</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">data</span><span class="p">:</span> <span class="dl">"</span><span class="s2">abc</span><span class="dl">"</span><span class="p">,</span>  <span class="na">loggerA</span><span class="p">:</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>  <span class="p">},</span>  <span class="nx">loggerB</span><span class="p">()</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">data</span><span class="p">);</span>  <span class="p">},</span><span class="p">};</span><span class="nx">myObj</span><span class="p">.</span><span class="nx">loggerA</span><span class="p">();</span> <span class="c1">// undefined</span><span class="nx">myObj</span><span class="p">.</span><span class="nx">loggerB</span><span class="p">();</span> <span class="c1">// "abc"</span></code></pre>',
	},
	{
		title: "Javascript getters and setters restricted",
		explanation:
			"JavaScript object properties are not private or protected. Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">myCat</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">_name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Dottie</span><span class="dl">"</span><span class="p">,</span>  <span class="kd">get</span> <span class="nx">name</span><span class="p">()</span> <span class="p">{</span>    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_name</span><span class="p">;</span>  <span class="p">},</span>  <span class="kd">set</span> <span class="nx">name</span><span class="p">(</span><span class="nx">newName</span><span class="p">)</span> <span class="p">{</span>    <span class="k">this</span><span class="p">.</span><span class="nx">_name</span> <span class="o">=</span> <span class="nx">newName</span><span class="p">;</span>  <span class="p">},</span><span class="p">};</span><span class="c1">// Reference invokes the getter</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">myCat</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span><span class="c1">// Assignment invokes the setter</span><span class="nx">myCat</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Yankee</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "getters and setters intercept property access",
		explanation:
			"JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">myCat</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">_name</span><span class="p">:</span> <span class="dl">\'</span><span class="s1">Snickers</span><span class="dl">\'</span><span class="p">,</span>  <span class="kd">get</span> <span class="nx">name</span><span class="p">(){</span>    <span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_name</span>  <span class="p">},</span>  <span class="kd">set</span> <span class="nx">name</span><span class="p">(</span><span class="nx">newName</span><span class="p">){</span>    <span class="c1">//Verify that newName is a non-empty</span>    <span class="nx">string</span> <span class="nx">before</span> <span class="nx">setting</span> <span class="k">as</span> <span class="nx">name</span> <span class="nx">property</span>    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">newName</span> <span class="o">===</span> <span class="dl">\'</span><span class="s1">string</span><span class="dl">\'</span> <span class="o">&amp;&amp;</span> <span class="nx">newName</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">){</span>      <span class="k">this</span><span class="p">.</span><span class="nx">_name</span> <span class="o">=</span> <span class="nx">newName</span><span class="p">;</span>    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">ERROR: name must be a nonempty string</span><span class="dl">"</span><span class="p">);</span>    <span class="p">}</span>  <span class="p">}</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Javascript factory functions",
		explanation:
			"A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// A factory function that accepts "name",</span><span class="c1">// "age", and "breed" parameters to return</span><span class="c1">// a customized dog object.</span><span class="kd">const</span> <span class="nx">dogFactory</span> <span class="o">=</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">age</span><span class="p">,</span> <span class="nx">breed</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="p">{</span>    <span class="na">name</span><span class="p">:</span> <span class="nx">name</span><span class="p">,</span>    <span class="na">age</span><span class="p">:</span> <span class="nx">age</span><span class="p">,</span>    <span class="na">breed</span><span class="p">:</span> <span class="nx">breed</span><span class="p">,</span>    <span class="nx">bark</span><span class="p">()</span> <span class="p">{</span>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Woof!</span><span class="dl">"</span><span class="p">);</span>    <span class="p">},</span>  <span class="p">};</span><span class="p">};</span></code></pre>',
	},
	{
		title: "JavaScript destructuring assignment shorthand syntax",
		explanation:
			"The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">rubiksCubeFacts</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">possiblePermutations</span><span class="p">:</span> <span class="dl">"</span><span class="s2">43,252,003,274,489,856,000</span><span class="dl">"</span><span class="p">,</span>  <span class="na">invented</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1974</span><span class="dl">"</span><span class="p">,</span>  <span class="na">largestCube</span><span class="p">:</span> <span class="dl">"</span><span class="s2">17x17x17</span><span class="dl">"</span><span class="p">,</span><span class="p">};</span><span class="kd">const</span> <span class="p">{</span> <span class="nx">possiblePermutations</span><span class="p">,</span> <span class="nx">invented</span><span class="p">,</span> <span class="nx">largestCube</span> <span class="p">}</span> <span class="o">=</span> <span class="nx">rubiksCubeFacts</span><span class="p">;</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">possiblePermutations</span><span class="p">);</span> <span class="c1">//</span><span class="p">(</span><span class="dl">"</span><span class="s2">43,252,003,274,489,856,000</span><span class="dl">"</span><span class="p">);</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">invented</span><span class="p">);</span> <span class="c1">// "1974"</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">largestCube</span><span class="p">);</span> <span class="c1">// "17x17x17"</span></code></pre>',
	},
	{
		title: "shorthand property name syntax for object creation",
		explanation:
			"The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). In this process, an object is created where the property names of that object match variables which already exist in that context. Shorthand property names populate an object with a key matching the identifier and a value matching the identifier's value.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">activity</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Surfing</span><span class="dl">"</span><span class="p">;</span><span class="kd">const</span> <span class="nx">beach</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">activity</span> <span class="p">};</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">beach</span><span class="p">);</span> <span class="c1">// { activity: \'Surfing\' }</span></code></pre>',
	},
	{
		title: "Class Constructor",
		explanation:
			"Classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">class</span> <span class="nx">Song</span> <span class="p">{</span>  <span class="nx">play</span><span class="p">()</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Playing!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span>  <span class="nx">stop</span><span class="p">()</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Stopping!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span><span class="p">}</span></code></pre>',
	},
	{
		title: "extends",
		explanation:
			"JavaScript classes support the concept of inheritance — a child class can extend a parent class. This is accomplished by using the extends keyword as part of the class definition.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// Parent class</span><span class="kd">class</span> <span class="nx">Media</span> <span class="p">{</span>  <span class="kd">constructor</span><span class="p">(</span><span class="nx">info</span><span class="p">)</span> <span class="p">{</span>    <span class="k">this</span><span class="p">.</span><span class="nx">publishDate</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">publishDate</span><span class="p">;</span>    <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">info</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span>  <span class="p">}</span><span class="p">}</span><span class="c1">// Child class</span><span class="kd">class</span> <span class="nx">Song</span> <span class="kd">extends</span> <span class="nx">Media</span> <span class="p">{</span>  <span class="kd">constructor</span><span class="p">(</span><span class="nx">songData</span><span class="p">)</span> <span class="p">{</span>    <span class="k">super</span><span class="p">(</span><span class="nx">songData</span><span class="p">);</span>    <span class="k">this</span><span class="p">.</span><span class="nx">artist</span> <span class="o">=</span> <span class="nx">songData</span><span class="p">.</span><span class="nx">artist</span><span class="p">;</span>  <span class="p">}</span><span class="p">}</span><span class="kd">const</span> <span class="nx">mySong</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Song</span><span class="p">({</span>  <span class="na">artist</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Queen</span><span class="dl">"</span><span class="p">,</span>  <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Bohemian Rhapsody</span><span class="dl">"</span><span class="p">,</span>  <span class="na">publishDate</span><span class="p">:</span> <span class="mi">1975</span><span class="p">,</span><span class="p">});</span></code></pre>',
	},
	{
		title: "Static Methods",
		explanation:
			"Within a JavaScript class, the static keyword defines a static method for a class. Static methods are not called on individual instances of the class, but are called on the class itself. Therefore, they tend to be general (utility) methods.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">class</span> <span class="nx">Dog</span> <span class="p">{</span>  <span class="kd">constructor</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span>    <span class="k">this</span><span class="p">.</span><span class="nx">_name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">;</span>  <span class="p">}</span>  <span class="nx">introduce</span><span class="p">()</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">This is </span><span class="dl">"</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">_name</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span>  <span class="c1">// A static method</span>  <span class="kd">static</span> <span class="nx">bark</span><span class="p">()</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Woof!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span><span class="p">}</span><span class="kd">const</span> <span class="nx">myDog</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Dog</span><span class="p">(</span><span class="dl">"</span><span class="s2">Buster</span><span class="dl">"</span><span class="p">);</span><span class="nx">myDog</span><span class="p">.</span><span class="nx">introduce</span><span class="p">();</span><span class="c1">// Calling the static method</span><span class="nx">Dog</span><span class="p">.</span><span class="nx">bark</span><span class="p">();</span></code></pre>',
	},
	{
		title: "Import Javascript modules with the require function",
		explanation:
			"In Node.js, the require function can used to import code from another file into the current script.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">var</span> <span class="nx">moduleA</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">./module-a.js</span><span class="dl">"</span><span class="p">);</span><span class="c1">// The .js extension is optional</span><span class="kd">var</span> <span class="nx">moduleA</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="dl">"</span><span class="s2">./module-a</span><span class="dl">"</span><span class="p">);</span><span class="c1">// Both ways will produce the same result.</span><span class="c1">// Now the functionality of moduleA can be used</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">moduleA</span><span class="p">.</span><span class="nx">someFunctionality</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Intermediate Javascript: Export Module",
		explanation:
			"To make an object in our Javascript file exportable as a module in Node.js we assign the object to the exports property of module.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">Course</span> <span class="o">=</span> <span class="p">{};</span><span class="nx">Course</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">Javascript Node.js</span><span class="dl">"</span><span class="p">;</span><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Course</span><span class="p">;</span></code></pre>',
	},
	{
		title: "Javascript export default",
		explanation:
			"As of ES6, the export default keywords allow for a single variable or function to be exported, then, in another script, it will be straightforward to import the default export.",
		example:
			'<pre class="highlight javascript"><code><span class="c1">// module "moduleA.js"</span><span class="k">export</span> <span class="k">default</span> <span class="kd">function</span> <span class="nx">cube</span><span class="p">(</span><span class="nx">x</span><span class="p">)</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">x</span> <span class="o">*</span> <span class="nx">x</span> <span class="o">*</span> <span class="nx">x</span><span class="p">;</span><span class="p">}</span><span class="c1">// In main.js</span><span class="k">import</span> <span class="nx">cube</span> <span class="k">from</span> <span class="dl">"</span><span class="s2">./moduleA.js</span><span class="dl">"</span><span class="p">;</span><span class="c1">// Now the `cube` function can be used</span><span class="nx">straightforwardly</span><span class="p">.</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">cube</span><span class="p">(</span><span class="mi">3</span><span class="p">));</span> <span class="c1">// 27</span></code></pre>',
	},
	{
		title: "Using the import keyword in Javascript",
		explanation:
			"As of ES6, the import keyword can be used to importfunctions, objects or primitives previously exported intothe current script.",
		example:
			'<pre class="highlight javascript"><code><span class="k">import</span> <span class="o">*</span> <span class="k">from</span> <span class="dl">\'</span><span class="s1">module_name</span><span class="dl">\'</span><span class="p">;</span></code></pre>',
	},
	{
		title: "JavaScript Promise Object",
		explanation:
			"A JavaScript Promise is an object that can be used toget the outcome of an asynchronous operation when thatresult is not instantly available.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>  <span class="c1">// An asynchronous operation.</span>  <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Resolved!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>    <span class="nx">reject</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Error</span><span class="dl">"</span><span class="p">));</span>  <span class="p">}</span><span class="p">});</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span>  <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">),</span>  <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">alert</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span><span class="p">);</span></code></pre>',
	},
	{
		title: "States of a JavaScript Promise",
		explanation:
			"A JavaScript Promise object can be in one of three states: pending , resolved , or rejected . While the value is not yet available, the Promise stays in the pending state. Afterwards, it transitions to one of the two states: resolved or rejected . A resolved promise stands for a successful completion. Due to errors, the promise may go in the rejected state.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">res</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span>  <span class="c1">// An asynchronous operation.</span>  <span class="k">if</span> <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Resolved!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">}</span> <span class="k">else</span> <span class="p">{</span>    <span class="nx">reject</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Error</span><span class="dl">"</span><span class="p">));</span>  <span class="p">}</span><span class="p">});</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span>  <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">),</span>  <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">alert</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Creating a Javascript Promise object",
		explanation:
			"An instance of a JavaScript Promise object is created using the new keyword.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">executorFn</span> <span class="o">=</span> <span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">The executor function of the promise!</span><span class="dl">"</span><span class="p">);</span><span class="p">};</span><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">executorFn</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Executor function of JavaScript Promise object",
		explanation:
			"A JavaScript promise’s executor function takes two functions as its arguments. The first parameter represents the function that should be called to resolve the promise and the other one is used when the promise should be rejected. A Promise object may use any oe or both of them inside its executor function.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">executorFn</span> <span class="o">=</span> <span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Resolved!</span><span class="dl">"</span><span class="p">);</span><span class="p">};</span><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="nx">executorFn</span><span class="p">);</span></code></pre>',
	},
	{
		title: ".then() method of a JavaScript Promise object",
		explanation:
			"The .then() method of a JavaScript Promise object can be used to get the eventual result (or error) of the asynchronous operation.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Result</span><span class="dl">"</span><span class="p">);</span>  <span class="p">},</span> <span class="mi">200</span><span class="p">);</span><span class="p">});</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span>  <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span>  <span class="p">},</span>  <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">alert</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span>  <span class="p">}</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Chaining multiple .then() methods",
		explanation:
			"The .then() method returns a Promise, even if one or both of the handler functions are absent. Because of this, multiple .then() methods can be chained together. This is known as composition.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">)</span> <span class="o">=&gt;</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">dAlan</span><span class="dl">"</span><span class="p">),</span> <span class="mi">100</span><span class="p">)</span><span class="p">);</span><span class="nx">promise</span>  <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="k">return</span> <span class="nx">res</span> <span class="o">===</span> <span class="dl">"</span><span class="s2">Alan</span><span class="dl">"</span>      <span class="p">?</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hey Alan!</span><span class="dl">"</span><span class="p">)</span>      <span class="p">:</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="dl">"</span><span class="s2">Who are you?</span><span class="dl">"</span><span class="p">);</span>  <span class="p">})</span>  <span class="p">.</span><span class="nx">then</span><span class="p">(</span>    <span class="p">(</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">);</span>    <span class="p">},</span>    <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="nx">alert</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span>    <span class="p">}</span>  <span class="p">);</span></code></pre>',
	},
	{
		title: "The .catch() method for handling rejection",
		explanation:
			"The function passed as the second argument to a .then() method of a promise object is used when the promise is rejected. An alternative to this approach is to use the JavaScript .catch() method of the promise object. The information for the rejection is available to the handler supplied in the .catch() method.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">reject</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Promise Rejected Unconditionally.</span><span class="dl">"</span><span class="p">));</span>  <span class="p">},</span> <span class="mi">1000</span><span class="p">);</span><span class="p">});</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span><span class="p">});</span><span class="nx">promise</span><span class="p">.</span><span class="k">catch</span><span class="p">((</span><span class="nx">err</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">alert</span><span class="p">(</span><span class="nx">err</span><span class="p">);</span><span class="p">});</span></code></pre>',
	},
	{
		title: "Avoiding nested Promise and .then()",
		explanation:
			"In JavaScript, when performing multiple asynchronous operations in a sequence, promises should be composed by chaining multiple .then() methods. This is better practice than nesting.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">*</span><span class="dl">"</span><span class="p">);</span>  <span class="p">},</span> <span class="mi">1000</span><span class="p">);</span><span class="p">});</span><span class="kd">const</span> <span class="nx">twoStars</span> <span class="o">=</span> <span class="p">(</span><span class="nx">star</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">star</span> <span class="o">+</span> <span class="nx">star</span><span class="p">;</span><span class="p">};</span><span class="kd">const</span> <span class="nx">oneDot</span> <span class="o">=</span> <span class="p">(</span><span class="nx">star</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="k">return</span> <span class="nx">star</span> <span class="o">+</span> <span class="dl">"</span><span class="s2">.</span><span class="dl">"</span><span class="p">;</span><span class="p">};</span><span class="kd">const</span> <span class="nx">print</span> <span class="o">=</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span><span class="p">};</span><span class="c1">// Chaining them all together</span><span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">twoStars</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">oneDot</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="nx">print</span><span class="p">);</span></code></pre>',
	},
	{
		title: "JavaScript Promise.all()",
		explanation:
			"The JavaScript Promise.all() method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument. If all of the promises in the argument are resolved, the promise returned from Promise.all() will resolve to an array containing the resolved values of all the promises in the order of the initial array. Any rejection from the list of promises will cause the greater promise to be rejected. In the code block, 3 and 2 will be printed respectively even though promise1 will be resolved after promise2 .",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">promise1</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="mi">3</span><span class="p">);</span>  <span class="p">},</span> <span class="mi">300</span><span class="p">);</span><span class="p">});</span><span class="kd">const</span> <span class="nx">promise2</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">resolve</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span>  <span class="p">},</span> <span class="mi">200</span><span class="p">);</span><span class="p">});</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">all</span><span class="p">([</span><span class="nx">promise1</span><span class="p">,</span> <span class="nx">promise2</span><span class="p">]).</span><span class="nx">then</span><span class="p">((</span><span class="nx">res</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">res</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span><span class="p">});</span></code></pre>',
	},
	{
		title: "Asynchronous JavaScript function",
		explanation:
			"An asynchronous JavaScript function can be created with the async keyword before the function name, or before () when using the async arrow function. An async function always returns a promise.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">function</span> <span class="nx">helloWorld</span><span class="p">()</span> <span class="p">{</span>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hello World!</span><span class="dl">"</span><span class="p">);</span>    <span class="p">},</span> <span class="mi">2000</span><span class="p">);</span>  <span class="p">});</span><span class="p">}</span><span class="kd">const</span> <span class="nx">msg</span> <span class="o">=</span> <span class="k">async</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span>  <span class="c1">//Async Function Expression</span>  <span class="kd">const</span> <span class="nx">msg</span> <span class="o">=</span> <span class="k">await</span> <span class="nx">helloWorld</span><span class="p">();</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Message:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span><span class="p">};</span><span class="kd">const</span> <span class="nx">msg1</span> <span class="o">=</span> <span class="k">async</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="c1">//Async Arrow Function</span>  <span class="kd">const</span> <span class="nx">msg</span> <span class="o">=</span> <span class="k">await</span> <span class="nx">helloWorld</span><span class="p">();</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Message:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span><span class="p">};</span><span class="nx">msg</span><span class="p">();</span> <span class="c1">// Message: Hello World! &lt;-- after 2 seconds</span><span class="nx">msg1</span><span class="p">();</span> <span class="c1">// Message: Hello World! &lt;-- after 2 seconds</span></code></pre>',
	},
	{
		title: "JavaScript async...await operator",
		explanation:
			"The JavaScript async...await syntax in ES6 offers a new way write more readable and scalable code to handle promise. A JavaScript async function can contain statements preceded by an await operator. The operand of await is a promise. At an await expression, the execution of the async function is pause and waits for the operand promise to resolve. The await operator returns the promise's resolved value. An await operand can only be used inside an async function.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">function</span> <span class="nx">helloWorld</span><span class="p">()</span> <span class="p">{</span>  <span class="k">return</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">((</span><span class="nx">resolve</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="nx">resolve</span><span class="p">(</span><span class="dl">"</span><span class="s2">Hello World!</span><span class="dl">"</span><span class="p">);</span>    <span class="p">},</span> <span class="mi">2000</span><span class="p">);</span>  <span class="p">});</span><span class="p">}</span><span class="k">async</span> <span class="kd">function</span> <span class="nx">msg</span><span class="p">()</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">msg</span> <span class="o">=</span> <span class="k">await</span> <span class="nx">helloWorld</span><span class="p">();</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="dl">"</span><span class="s2">Message:</span><span class="dl">"</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span><span class="p">}</span><span class="nx">msg</span><span class="p">();</span> <span class="c1">// Message: Hello World! &lt;-- after 2 seconds;</span></code></pre>',
	},
	{
		title: "JavaScript async…await advantage",
		explanation:
			"The JavaScript async...await syntax allows multiple promises to be initiated and then resolved for values when required during execution of the program. As an alternate to chaining .then() functions, it offers better maintainability of the code and a close resemblance synchronous code.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">json</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">{ "age": 30 }</span><span class="dl">\'</span><span class="p">;</span> <span class="c1">// incomplete data</span><span class="k">try</span> <span class="p">{</span>  <span class="kd">let</span> <span class="nx">user</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">json</span><span class="p">);</span> <span class="c1">// &lt;-- no</span>  <span class="nx">errors</span><span class="p">;</span>  <span class="nx">alert</span><span class="p">(</span><span class="nx">user</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span> <span class="c1">// no name!</span><span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">alert</span><span class="p">(</span><span class="dl">"</span><span class="s2">Invalid JSON data!</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Async Function Error Handling",
		explanation:
			"JavaScript async functions uses try...catch statements for error handling. This method allows shared error handling for synchronous and asynchronous code.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">json</span> <span class="o">=</span> <span class="dl">\'</span><span class="s1">{ "age": 30 }</span><span class="dl">\'</span><span class="p">;</span> <span class="c1">// incomplete data</span><span class="k">try</span> <span class="p">{</span>  <span class="kd">let</span> <span class="nx">user</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">json</span><span class="p">);</span> <span class="c1">// &lt;-- no</span>  <span class="nx">errors</span><span class="p">;</span>  <span class="nx">alert</span><span class="p">(</span><span class="nx">user</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span> <span class="c1">// no name!</span><span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">alert</span><span class="p">(</span><span class="dl">"</span><span class="s2">Invalid JSON data!</span><span class="dl">"</span><span class="p">);</span><span class="p">}</span></code></pre>',
	},
	{
		title: "Using async await syntax",
		explanation:
			"Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously. Through this approach, a program can take advantage of concurrency, and asynchronous actions can be initiated within an async function. Since using the await keyword halts the execution of an async function, each async function can be awaited once its value is required by program logic.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">promise1</span> <span class="o">=</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="mi">5</span><span class="p">);</span><span class="kd">let</span> <span class="nx">promise2</span> <span class="o">=</span> <span class="mi">44</span><span class="p">;</span><span class="kd">let</span> <span class="nx">promise3</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="dl">"</span><span class="s2">foo</span><span class="dl">"</span><span class="p">);</span><span class="p">});</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">all</span><span class="p">([</span><span class="nx">promise1</span><span class="p">,</span> <span class="nx">promise2</span><span class="p">,</span> <span class="nx">promise3</span><span class="p">]).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">values</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">values</span><span class="p">);</span><span class="p">});</span><span class="c1">// expected output: Array [5, 44, "foo"]</span></code></pre>',
	},
	{
		title: "Resolving JavaScript Promises",
		explanation:
			"When using JavaScript async...await , multiple asynchronous operations can run concurrently. If the resolved value is required for each promise initiated, Promise.all() can be used to retrieve the resolved value, avoiding unnecessary blocking.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">let</span> <span class="nx">promise1</span> <span class="o">=</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="mi">5</span><span class="p">);</span><span class="kd">let</span> <span class="nx">promise2</span> <span class="o">=</span> <span class="mi">44</span><span class="p">;</span><span class="kd">let</span> <span class="nx">promise3</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Promise</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="nx">reject</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">setTimeout</span><span class="p">(</span><span class="nx">resolve</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="dl">"</span><span class="s2">foo</span><span class="dl">"</span><span class="p">);</span><span class="p">});</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">all</span><span class="p">([</span><span class="nx">promise1</span><span class="p">,</span> <span class="nx">promise2</span><span class="p">,</span> <span class="nx">promise3</span><span class="p">]).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">values</span><span class="p">)</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">values</span><span class="p">);</span><span class="p">});</span><span class="c1">// expected output: Array [5, 44, "foo"]</span></code></pre>',
	},
	{
		title: "Asynchronous calls with XMLHttpRequest",
		explanation:
			"AJAX enables HTTP requests to be made not only during the load time of a web page but also anytime after a page initially loads. This allows adding dynamic behavior to a webpage. This is essential for giving a good user experience without reloading the webpage for transferring data to and from the web server.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">mysite.com/api/getjson</span><span class="dl">"</span><span class="p">);</span></code></pre>',
	},
	{
		title: "HTTP POST request",
		explanation:
			"HTTP POST requests are made with the intention of sending new information to the source (server) that will receive it.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">requestUrl</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">http://mysite.com/api/vendor?name=kavin&amp;id=35412</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "HTTP GET request",
		explanation:
			"HTTP GET requests are made with the intention of retrieving information or data from a source (server) over the web.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">requestUrl</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">http://mysite.com/api/vendor?name=kavin&amp;id=35412</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "The query string in a URL",
		explanation:
			"Query strings are used to send additional information to the server during an HTTP GET request.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">requestUrl</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">http://mysite.com/api/vendor?name=kavin&amp;id=35412</span><span class="dl">"</span><span class="p">;</span></code></pre>',
	},
	{
		title: "JSON: JavaScript Object Notation",
		explanation:
			"JSON or JavaScript Object Notation is a data format suitable for transporting data to and from a server. It is essentially a slightly stricter version of a Javascript object. A JSON object should be enclosed in curly braces and may contain one or more property-value pairs. JSON names require double quotes, while standard Javascript objects do not.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">jsonObj</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">name</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Rick</span><span class="dl">"</span><span class="p">,</span>  <span class="na">id</span><span class="p">:</span> <span class="dl">"</span><span class="s2">11A</span><span class="dl">"</span><span class="p">,</span>  <span class="na">level</span><span class="p">:</span> <span class="mi">4</span><span class="p">,</span><span class="p">};</span></code></pre>',
	},
	{
		title: "XMLHttpRequest GET Request Requirements",
		explanation:
			"The request type, response type, request URL, and handler for the response data must be provided in order to make an HTTP GET request with the JavaScript XMLHttpRequest API.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">req</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span><span class="nx">req</span><span class="p">.</span><span class="nx">responseType</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span><span class="p">;</span><span class="nx">req</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="dl">"</span><span class="s2">GET</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">/myendpoint/getdata?id=65</span><span class="dl">"</span><span class="p">);</span><span class="nx">req</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">response</span><span class="p">);</span><span class="p">};</span><span class="nx">req</span><span class="p">.</span><span class="nx">send</span><span class="p">();</span></code></pre>',
	},
	{
		title: "HTTP POST request with the XMLHttpRequest API",
		explanation:
			"To make an HTTP POST request with the JavaScript XMLHttpRequest API, a request type, response type, request URL, request body, and handler for the response data must be provided. The request body is essential because the information sent via the POST method is not visible in the URL. The request type must be POST for this case. The response type can be a variety of types including array buffer, json, etc.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">data</span> <span class="o">=</span> <span class="p">{</span>  <span class="na">fish</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Salmon</span><span class="dl">"</span><span class="p">,</span>  <span class="na">weight</span><span class="p">:</span> <span class="dl">"</span><span class="s2">1.5 KG</span><span class="dl">"</span><span class="p">,</span>  <span class="na">units</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span><span class="p">};</span><span class="kd">const</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">,</span> <span class="dl">"</span><span class="s2">/inventory/add</span><span class="dl">"</span><span class="p">);</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">responseType</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">json</span><span class="dl">"</span><span class="p">;</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">onload</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">response</span><span class="p">);</span><span class="p">};</span></code></pre>',
	},
	{
		title: "fetch() method",
		explanation:
			"A JavaScript Fetch API is used to access and manipulate requests and responses within the HTTP pipeline, fetching resources asynchronously across a network. A basic fetch(( request will accept a URL parameter, send a request and contain a success and failure promise handler function.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">fetch</span><span class="p">(</span><span class="dl">"</span><span class="s2">url</span><span class="dl">"</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span>  <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span>  <span class="p">},</span>  <span class="p">(</span><span class="nx">rejection</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="nx">rejection</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span>  <span class="p">}</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Response.ok property fetch api",
		explanation:
			"In a Fetch API function fetch() the ok property of a response checks to see if it evaluates to true or false . In the code example the .ok property will be true when the HTTP request is successful. The .ok property will be false when the HTTP request is unsuccessful.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">fetch</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="p">{</span>  <span class="na">method</span><span class="p">:</span> <span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">,</span>  <span class="na">headers</span><span class="p">:</span> <span class="p">{</span>    <span class="dl">"</span><span class="s2">Content-type</span><span class="dl">"</span><span class="p">:</span> <span class="dl">"</span><span class="s2">application/json</span><span class="dl">"</span><span class="p">,</span>    <span class="dl">"</span><span class="s2">api-key</span><span class="dl">"</span><span class="p">:</span> <span class="nx">apiKey</span><span class="p">,</span>  <span class="p">},</span>  <span class="na">body</span><span class="p">:</span> <span class="nx">data</span><span class="p">,</span><span class="p">}).</span><span class="nx">then</span><span class="p">(</span>  <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="k">if</span> <span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span>      <span class="k">return</span> <span class="nx">response</span><span class="p">.</span><span class="nx">json</span><span class="p">();</span>    <span class="p">}</span>    <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Request failed!</span><span class="dl">"</span><span class="p">);</span>  <span class="p">},</span>  <span class="p">(</span><span class="nx">networkError</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">networkError</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span>  <span class="p">}</span><span class="p">);</span></code></pre>',
	},
	{
		title: "Fetch API Function",
		explanation:
			"The Fetch API function fetch() can be used to create requests. Though accepting additional arguments, the request can be customized. This can be used to change the request type, headers, specify a request body, and much more as shown in the example block of code.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">fetch</span><span class="p">(</span><span class="dl">"</span><span class="s2">https://api-to-call.com/endpoint</span><span class="dl">"</span><span class="p">,</span> <span class="p">{</span>  <span class="na">method</span><span class="p">:</span> <span class="dl">"</span><span class="s2">POST</span><span class="dl">"</span><span class="p">,</span>  <span class="na">body</span><span class="p">:</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">({</span> <span class="na">id</span><span class="p">:</span> <span class="dl">"</span><span class="s2">200</span><span class="dl">"</span> <span class="p">}),</span><span class="p">})</span>  <span class="p">.</span><span class="nx">then</span><span class="p">(</span>    <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="k">if</span> <span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span>        <span class="k">return</span> <span class="nx">response</span><span class="p">.</span><span class="nx">json</span><span class="p">();</span>      <span class="p">}</span>      <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="dl">"</span><span class="s2">Request failed!</span><span class="dl">"</span><span class="p">);</span>    <span class="p">},</span>    <span class="p">(</span><span class="nx">networkError</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>      <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">networkError</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span>    <span class="p">}</span>  <span class="p">)</span>  <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">jsonResponse</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">jsonResponse</span><span class="p">);</span>  <span class="p">});</span></code></pre>',
	},
	{
		title: "JSON Formatted response body",
		explanation:
			"The .json() method will resolve a returned promise to a JSON object, parsing the body text as JSON. The example block of code shows .json() method that returns a promise that resolves to a JSON-formatted response body as a JavaScript object.",
		example:
			'<pre class="highlight javascript"><code><span class="nx">fetch</span><span class="p">(</span><span class="dl">"</span><span class="s2">url-that-returns-JSON</span><span class="dl">"</span><span class="p">)</span>  <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">response</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="nx">response</span><span class="p">.</span><span class="nx">json</span><span class="p">())</span>  <span class="p">.</span><span class="nx">then</span><span class="p">((</span><span class="nx">jsonResponse</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">jsonResponse</span><span class="p">);</span>  <span class="p">});</span></code></pre>',
	},
	{
		title: "fetch with Async...Await",
		explanation:
			"The async…await syntax is used with the JS Fetch API fetch() to work with promises. In the code block example we see the keyword async placed the function. This means that the function will return a promise. The keyword await makes the JavaScript wait until the problem is resolved.",
		example:
			'<pre class="highlight javascript"><code><span class="kd">const</span> <span class="nx">getSuggestions</span> <span class="o">=</span> <span class="k">async</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>  <span class="kd">const</span> <span class="nx">wordQuery</span> <span class="o">=</span> <span class="nx">inputField</span><span class="p">.</span><span class="nx">value</span><span class="p">;</span>  <span class="kd">const</span> <span class="nx">endpoint</span> <span class="o">=</span> <span class="s2">`</span><span class="p">${</span><span class="nx">url</span><span class="p">}${</span><span class="nx">queryParams</span><span class="p">}${</span><span class="nx">wordQuery</span><span class="p">}</span><span class="s2">`</span><span class="p">;</span>  <span class="k">try</span> <span class="p">{</span>    <span class="kd">const</span> <span class="nx">response</span> <span class="o">=</span> <span class="k">await</span> <span class="nx">fetch</span><span class="p">(</span><span class="nx">endpoint</span><span class="p">,</span> <span class="p">{</span> <span class="na">cache</span><span class="p">:</span> <span class="dl">"</span><span class="s2">no-cache</span><span class="dl">"</span> <span class="p">});</span>    <span class="k">if</span> <span class="p">(</span><span class="nx">response</span><span class="p">.</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span>      <span class="kd">const</span> <span class="nx">jsonResponse</span> <span class="o">=</span> <span class="k">await</span> <span class="nx">response</span><span class="p">.</span><span class="nx">json</span><span class="p">();</span>    <span class="p">}</span>  <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">error</span><span class="p">)</span> <span class="p">{</span>    <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="nx">error</span><span class="p">);</span>  <span class="p">}</span><span class="p">};</span></code></pre>',
	},
];

// get a list of titles from syntaxData
function getKeys() {
	const d = [];
	for (i = 0; i < syntaxData.length; i++) {
		d.push(syntaxData[i].title);
	}
	return d;
}

const keyArray = getKeys();

// use title to find selected item
function findFromTitles(selectedTitle) {
	let selectedItemArray = syntaxData.filter((item) => {
		return item.title == selectedTitle;
	});
	return selectedItemArray[0];
}
function displayItem(object) {
	return `${object.title}\n\n${object.explanation}\n\n\n${object.example}`;
}
function addToBody(codeToAdd) {
	document.body.innerHTML += codeToAdd;
}
let b = "Functions Assigned to Variables";
// console.log(b);
let c = displayItem(findFromTitles(b));
addToBody(c);
