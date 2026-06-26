// NewUU course data - ALL 6 units fully written (explanations + reviews + worked examples).
// 170 practice + 102 hard questions. Math in LaTeX: \( \) inline, \[ \] display.
const COURSE_DATA = {
  "units": [
    {
      "unit": 1,
      "name": "Probability & Statistics",
      "skills": [
        {
          "id": "1.1",
          "title": "1.1 Sample space and events",
          "explanation": "<p>When every outcome is <b>equally likely</b>, probability is just careful counting:</p>\n<p>\\[ P(\\text{event}) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}} \\]</p>\n<p>The entire skill is getting <i>both</i> numbers right. So the first job is knowing your standard sample spaces cold:</p>\n<ul>\n<li><b>Two dice:</b> \\(6 \\times 6 = 36\\) ordered outcomes.</li>\n<li><b>A coin flipped \\(n\\) times:</b> \\(2^n\\) sequences.</li>\n<li><b>A deck of cards:</b> 52 cards = 4 suits \\(\\times\\) 13 ranks; <b>12 face cards</b> (J, Q, K \\(\\times\\) 4); 26 red, 26 black.</li>\n</ul>\n<p><b>Dice sums.</b> The number of ways to roll each sum from 2 to 12 goes <b>1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1</b> — symmetric, peaking at 7. Memorise this row and any \"sum\" question is instant.</p>\n<p><b>Worked example.</b> Two fair dice are rolled. Find \\(P(\\text{sum} \\ge 10)\\).<br>\nSums 10, 11, 12 happen in \\(3 + 2 + 1 = 6\\) ways out of 36, so \\(P = \\tfrac{6}{36} = \\tfrac{1}{6}\\).</p>\n<h4>The single most important technique: the complement</h4>\n<p>\\[ P(\\text{at least one}) = 1 - P(\\text{none}) \\]</p>\n<p>Whenever you read <b>\"at least one,\"</b> your hand should already be writing \"\\(1 - \\)\". Counting \"at least one\" directly is slow and error-prone — that is the trap.</p>\n<p><b>Worked example.</b> Two dice are rolled. Find \\(P(\\text{at least one six})\\).<br>\n\\(P(\\text{no six}) = \\left(\\tfrac{5}{6}\\right)^2 = \\tfrac{25}{36}\\), so \\(P(\\text{at least one six}) = 1 - \\tfrac{25}{36} = \\tfrac{11}{36}\\).</p>",
          "review": "<ul>\n<li><b>Formula:</b> \\(P = \\dfrac{\\text{favourable}}{\\text{total}}\\) (equally likely outcomes only).</li>\n<li><b>Complement:</b> \\(P(\\text{at least one}) = 1 - P(\\text{none})\\) — use it every time you see \"at least\".</li>\n<li><b>Know cold:</b> 36 dice outcomes, \\(2^n\\) coin sequences, 12 face cards, dice-sum row 1-2-3-4-5-6-5-4-3-2-1.</li>\n<li><b>Trap:</b> counting \"at least one\" the long way instead of via the complement.</li>\n</ul>"
        },
        {
          "id": "1.2",
          "title": "1.2 Probabilities (combined events, diagrams)",
          "explanation": "<p>Two master rules govern combined events.</p>\n<h4>OR — the addition rule</h4>\n<p>\\[ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\]</p>\n<p>You subtract the overlap so it is not counted twice. If \\(A\\) and \\(B\\) are <b>mutually exclusive</b> (cannot both happen), the overlap is 0 and it is just \\(P(A)+P(B)\\).</p>\n<h4>AND — the multiplication rule</h4>\n<p>\\[ P(A \\cap B) = P(A)\\cdot P(B \\mid A) \\]</p>\n<p>If the events are <b>independent</b>, this simplifies to \\(P(A)\\cdot P(B)\\).</p>\n<h4>Without replacement: the denominator shrinks</h4>\n<p><b>Worked example.</b> A bag has 5 red and 3 blue balls. Two are drawn without replacement. Find \\(P(\\text{different colours})\\).<br>\n\\[ P(RB) + P(BR) = \\tfrac{5}{8}\\cdot\\tfrac{3}{7} + \\tfrac{3}{8}\\cdot\\tfrac{5}{7} = \\tfrac{15}{56} + \\tfrac{15}{56} = \\tfrac{15}{28}. \\]</p>\n<p>Notice the structure — <b>multiply along a branch, add across branches</b>. That is exactly the <b>tree diagram</b> rule, and it solves every problem of this type.</p>\n<h4>Venn diagrams: inclusion–exclusion</h4>\n<p><b>Worked example.</b> Of 30 students, 18 like maths, 15 like physics, 8 like both. How many like neither?<br>\nAt least one: \\(18 + 15 - 8 = 25\\); so neither \\(= 30 - 25 = 5\\).</p>\n<p>Always fill a Venn diagram <b>from the centre outward</b>: put 8 in the overlap first, then \\(18-8=10\\) and \\(15-8=7\\) in the \"only\" regions. Writing 18 into the whole maths circle is the classic mistake — 18 already includes the overlap.</p>\n<p>A \"possibility diagram\" in the spec just means a grid of outcomes (like the \\(6\\times 6\\) dice table) — same idea, drawn as a table.</p>",
          "review": "<ul>\n<li><b>OR:</b> \\(P(A\\cup B) = P(A)+P(B)-P(A\\cap B)\\).</li>\n<li><b>AND:</b> \\(P(A\\cap B) = P(A)\\,P(B\\mid A)\\); independent \\(\\Rightarrow P(A)P(B)\\).</li>\n<li><b>Tree rule:</b> multiply along branches, add across branches.</li>\n<li><b>Without replacement:</b> the denominator drops by 1 on the second draw.</li>\n<li><b>Trap:</b> filling a Venn circle with the total instead of the \"only\" part — fill centre first.</li>\n</ul>"
        },
        {
          "id": "1.3",
          "title": "1.3 Binomial probabilities",
          "explanation": "<p>The binomial setting: <b>\\(n\\) independent identical trials</b>, each a success with probability \\(p\\). Then</p>\n<p>\\[ P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k}\\, p^k (1-p)^{\\,n-k}. \\]</p>\n<p>Understand <i>why</i> and you will never misremember it: any one specific sequence with \\(k\\) successes has probability \\(p^k(1-p)^{n-k}\\), and there are \\(\\binom{n}{k}\\) ways to choose <i>which</i> trials are the successes.</p>\n<p><b>Worked example.</b> A fair coin is flipped 6 times. Find \\(P(\\text{exactly 3 heads})\\).<br>\n\\[ \\binom{6}{3}\\left(\\tfrac{1}{2}\\right)^6 = \\frac{20}{64} = \\frac{5}{16}. \\]</p>\n<p><b>Worked example.</b> A fair die is rolled 3 times. Find \\(P(\\text{exactly one six})\\).<br>\n\\[ \\binom{3}{1}\\left(\\tfrac{1}{6}\\right)^1\\left(\\tfrac{5}{6}\\right)^2 = 3\\cdot\\tfrac{1}{6}\\cdot\\tfrac{25}{36} = \\frac{75}{216} = \\frac{25}{72}. \\]</p>\n<p><b>\"At least\" / \"at most\":</b> either add the relevant cases or use the complement, whichever has fewer terms. In particular \\(P(\\text{at least one success}) = 1 - (1-p)^n\\) — the complement rule wearing a binomial coat.</p>\n<p><b>No-calculator skill.</b> Be fast with powers of small fractions: \\(\\left(\\tfrac{5}{6}\\right)^4 = \\tfrac{625}{1296}\\), \\(\\left(\\tfrac{1}{2}\\right)^6 = \\tfrac{1}{64}\\), \\(0.8^3 = 0.512\\).</p>",
          "review": "<ul>\n<li><b>Formula:</b> \\(P(k) = \\binom{n}{k} p^k (1-p)^{n-k}\\).</li>\n<li><b>Why:</b> one sequence has prob \\(p^k(1-p)^{n-k}\\); \\(\\binom{n}{k}\\) chooses which trials succeed.</li>\n<li><b>At least one:</b> \\(1-(1-p)^n\\).</li>\n<li><b>Trap:</b> forgetting the \\(\\binom{n}{k}\\) factor, or mixing up \\(k\\) and \\(n-k\\) in the exponents.</li>\n</ul>"
        },
        {
          "id": "1.4",
          "title": "1.4 Conditional probability and independence",
          "explanation": "<p><b>Definition.</b></p>\n<p>\\[ P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}. \\]</p>\n<p>Intuition: \"given \\(B\\)\" means <b>\\(B\\) is your new universe</b>. Throw away every outcome where \\(B\\) did not happen, then ask how much of what is left is \\(A\\).</p>\n<h4>Reduced-sample-space method (fastest for dice and cards)</h4>\n<p><b>Worked example.</b> Two dice are rolled and the sum is 8. Find \\(P(\\text{at least one six})\\).<br>\nNew universe (sum 8): \\((2,6),(3,5),(4,4),(5,3),(6,2)\\) — five outcomes. Two of them contain a six, so \\(P = \\tfrac{2}{5}\\). No formula needed.</p>\n<h4>Independence test (this exact check gets asked)</h4>\n<p>\\(A\\) and \\(B\\) are independent precisely when \\[ P(A\\cap B) = P(A)\\cdot P(B). \\]</p>\n<p><b>Trap that catches strong students:</b> <i>mutually exclusive is not the same as independent</i> — they are nearly opposites. If \\(A,B\\) are mutually exclusive with non-zero probabilities, then knowing \\(A\\) happened tells you \\(B\\) did <i>not</i> — maximum dependence. Check: \\(P(A\\cap B)=0\\) but \\(P(A)P(B)>0\\), so not equal, so <b>dependent</b>.</p>\n<h4>Reverse conditioning (Bayes via a tree) — the hardest type here</h4>\n<p><b>Worked example.</b> Machine X makes 60% of items (2% defective); machine Y makes 40% (5% defective). An item is defective. Find \\(P(\\text{it came from Y})\\).<br>\nTree: \\(P(X\\cap\\text{def}) = 0.6\\times 0.02 = 0.012\\); \\(P(Y\\cap\\text{def}) = 0.4\\times 0.05 = 0.020\\). Then\n\\[ P(Y\\mid\\text{def}) = \\frac{0.020}{0.012 + 0.020} = \\frac{20}{32} = \\frac{5}{8}. \\]\nThe pattern: <b>the branch you want, over the sum of all branches producing the observed outcome.</b></p>\n<p>One more classic: \"two coins, at least one is heads, find \\(P(\\text{both heads})\\).\" New universe \\(\\{HH, HT, TH\\}\\), so \\(P = \\tfrac{1}{3}\\) — <i>not</i> \\(\\tfrac{1}{2}\\). And remember \\(P(A\\mid B) \\neq P(B\\mid A)\\): \\(P(\\text{king}\\mid\\text{face card}) = \\tfrac{4}{12} = \\tfrac13\\), but \\(P(\\text{face card}\\mid\\text{king}) = 1\\).</p>",
          "review": "<ul>\n<li><b>Formula:</b> \\(P(A\\mid B) = \\dfrac{P(A\\cap B)}{P(B)}\\) — restrict to the world where \\(B\\) happened.</li>\n<li><b>Independence:</b> \\(P(A\\cap B)=P(A)P(B)\\).</li>\n<li><b>Bayes by tree:</b> wanted branch \\(\\div\\) sum of all branches giving the observed result.</li>\n<li><b>Trap 1:</b> mutually exclusive \\(\\neq\\) independent (they are opposites).</li>\n<li><b>Trap 2:</b> assuming \\(P(A\\mid B)=P(B\\mid A)\\).</li>\n</ul>"
        },
        {
          "id": "1.5",
          "title": "1.5 Central tendency and dispersion",
          "explanation": "<h4>Measures of centre</h4>\n<ul>\n<li><b>Mean</b> \\(= \\dfrac{\\sum x}{n}\\) — uses every value, so outliers drag it.</li>\n<li><b>Median</b> = middle of the <b>sorted</b> list (average the two middles if \\(n\\) is even). Sorting first is non-negotiable.</li>\n<li><b>Mode</b> = most frequent value (can be none, or several).</li>\n</ul>\n<h4>Measures of spread</h4>\n<ul>\n<li><b>Range</b> \\(= \\max - \\min\\).</li>\n<li><b>Quartiles:</b> \\(Q_1\\) = median of the lower half, \\(Q_3\\) = median of the upper half; <b>IQR</b> \\(= Q_3 - Q_1\\). (For odd \\(n\\), exclude the overall median from both halves.)</li>\n<li><b>Variance</b> (population) \\(\\sigma^2 = \\dfrac{\\sum (x-\\mu)^2}{n}\\), and <b>SD</b> \\(= \\sqrt{\\text{variance}}\\). Shortcut: \\(\\sigma^2 = \\dfrac{\\sum x^2}{n} - \\mu^2\\).</li>\n</ul>\n<p><b>Worked example.</b> Find the variance and SD of \\(1,2,3,4,5\\).<br>\nMean \\(=3\\); squared deviations \\(4+1+0+1+4 = 10\\); variance \\(= \\tfrac{10}{5} = 2\\); SD \\(= \\sqrt{2}\\).</p>\n<h4>Transformation rules (a favourite hard-question source)</h4>\n<p>If every value becomes \\(kx + c\\), then \\[ \\text{mean} \\to k\\cdot\\text{mean} + c, \\qquad \\text{SD} \\to |k|\\cdot\\text{SD}, \\qquad \\text{variance} \\to k^2\\cdot\\text{variance}. \\]</p>\n<p>Adding a constant shifts the centre and does <b>nothing</b> to spread; doubling the data quadruples the variance.</p>\n<p><b>Worked example.</b> Seven numbers have median 15. Every number is doubled and then 3 is added. New median \\(= 2(15)+3 = 33\\) (order is preserved).</p>\n<p><b>Choosing a measure:</b> median for skewed data or outliers, mean when every value should count, mode for categorical data. <b>Speed trick:</b> the mean of evenly spaced numbers is just the middle value.</p>",
          "review": "<ul>\n<li><b>Centre:</b> mean \\(=\\frac{\\sum x}{n}\\); median = middle of sorted data; mode = most frequent.</li>\n<li><b>Spread:</b> range, IQR \\(=Q_3-Q_1\\), \\(\\sigma^2=\\frac{\\sum(x-\\mu)^2}{n}=\\frac{\\sum x^2}{n}-\\mu^2\\), SD \\(=\\sqrt{\\sigma^2}\\).</li>\n<li><b>Transform \\(kx+c\\):</b> mean \\(\\to k\\cdot\\text{mean}+c\\); SD \\(\\to |k|\\cdot\\text{SD}\\); variance \\(\\to k^2\\cdot\\text{var}\\).</li>\n<li><b>Trap:</b> computing the median before sorting; applying \\(+c\\) to the spread (it does nothing).</li>\n</ul>"
        },
        {
          "id": "1.6",
          "title": "1.6 Interpreting data from tables and charts",
          "explanation": "<p>The arithmetic is easy here; marks are lost to <b>misreading</b>. Make these conversions reflexive.</p>\n<h4>Pie charts</h4>\n<p>\\[ \\text{fraction} = \\frac{\\text{angle}}{360^\\circ}, \\qquad \\text{amount} = \\frac{\\text{angle}}{360^\\circ}\\times \\text{total}. \\]</p>\n<p><b>Worked example.</b> A pie chart of a \\$2000 budget shows Rent \\(144^\\circ\\). Rent amount \\(= \\tfrac{144}{360}\\times 2000 = \\tfrac{2}{5}\\times 2000 = \\$800\\). Backwards too: \\(25\\% \\to 90^\\circ\\).</p>\n<h4>Frequency tables</h4>\n<p>\\[ \\text{mean} = \\frac{\\sum (\\text{value}\\times\\text{frequency})}{\\sum \\text{frequency}}. \\]</p>\n<p>Divide by the <b>total frequency</b>, not the number of rows — that is <i>the</i> trap here. For the median, find position \\(\\tfrac{n+1}{2}\\) by accumulating frequencies.</p>\n<p><b>Worked example.</b> Values 1,2,3,4 with frequencies 3, \\(x\\), 5, 2 have mean 2.5. Find \\(x\\).<br>\n\\(\\dfrac{1(3)+2x+3(5)+4(2)}{3+x+5+2} = 2.5 \\Rightarrow \\dfrac{26+2x}{10+x} = 2.5\\). Cross-multiply: \\(26+2x = 25+2.5x \\Rightarrow x = 2\\).</p>\n<h4>Line and bar charts</h4>\n<p>Read axes and units first, then compute: rate of change \\(= \\dfrac{\\Delta \\text{value}}{\\Delta \\text{time}}\\), percentages of a total, or direct comparisons.</p>",
          "review": "<ul>\n<li><b>Pie:</b> fraction \\(=\\frac{\\text{angle}}{360}\\); amount \\(=\\frac{\\text{angle}}{360}\\times\\text{total}\\).</li>\n<li><b>Frequency mean:</b> \\(\\frac{\\sum(\\text{value}\\times\\text{freq})}{\\sum\\text{freq}}\\) — divide by total frequency.</li>\n<li><b>Median position:</b> \\(\\frac{n+1}{2}\\) via a running total of frequencies.</li>\n<li><b>Trap:</b> dividing by the number of rows instead of total frequency; ignoring axis units.</li>\n</ul>"
        },
        {
          "id": "1.7",
          "title": "1.7 Permutations",
          "explanation": "<p><b>Permutations = order matters.</b> Distinct objects in a row: \\(n!\\) ways. Know \\(1!\\) to \\(8!\\): \\(1, 2, 6, 24, 120, 720, 5040, 40320\\).</p>\n<h4>Repeated letters</h4>\n<p>\\[ \\text{arrangements} = \\frac{n!}{a!\\,b!\\,\\cdots} \\]</p>\n<p>where \\(a, b, \\dots\\) are the repeat counts. The identical letters create indistinguishable arrangements, so you divide out their internal shuffles.</p>\n<p><b>Worked example.</b> Arrangements of <b>APPLE</b>: \\(\\dfrac{5!}{2!} = 60\\) (the P repeats). Of <b>MISSISSIPPI</b>: \\(\\dfrac{11!}{4!\\,4!\\,2!} = 34650\\).</p>\n<h4>Restriction \"must be together\" — the glue method</h4>\n<p>Tape the group into one block, then count.<br>\n<b>Worked example.</b> APPLE with the vowels A, E together: treat {AE} as one unit, giving units {AE}, P, P, L \\(\\Rightarrow \\dfrac{4!}{2!} = 12\\); times \\(2!\\) for AE/EA \\(= \\mathbf{24}\\).</p>\n<h4>Restriction \"must NOT be together\"</h4>\n<p><b>Method 1 — total minus together.</b> APPLE with the P's apart: \\(60 - 24 = 36\\) (total \\(\\dfrac{5!}{2!}=60\\); P's together \\(4! = 24\\)).</p>\n<p><b>Method 2 — the gap method</b> (needed when several items must be separated): arrange the others first, then drop the restricted items into the gaps.<br>\nAPPLE: arrange A, L, E \\(\\Rightarrow 3! = 6\\); this creates 4 gaps \\(\\_A\\_L\\_E\\_\\); choose 2 gaps for the two P's: \\(\\binom{4}{2} = 6\\). Total \\(6\\times 6 = \\mathbf{36}\\) ✓ — same answer, and the only method that scales.</p>\n<h4>Filling slots (\\(k\\) from \\(n\\), no repetition)</h4>\n<p>Multiply the available choices: 3-digit numbers from digits 1–5 \\(\\Rightarrow 5\\times 4\\times 3 = 60\\). That is \\({}^nP_k = \\dfrac{n!}{(n-k)!}\\). Watch for sneaky constraints like \"cannot start with 0\" — handle the restricted slot <b>first</b>.</p>",
          "review": "<ul>\n<li><b>Distinct in a row:</b> \\(n!\\).</li>\n<li><b>Repeats:</b> \\(\\dfrac{n!}{a!\\,b!\\cdots}\\).</li>\n<li><b>Together:</b> glue into a block, then \\((\\text{units})!\\times(\\text{inside})!\\).</li>\n<li><b>Not together:</b> total \\(-\\) together, or the gap method \\(\\binom{\\text{gaps}}{\\,k\\,}\\).</li>\n<li><b>Slots:</b> \\({}^nP_k=\\frac{n!}{(n-k)!}\\); do restricted positions first.</li>\n</ul>"
        },
        {
          "id": "1.8",
          "title": "1.8 Combinations",
          "explanation": "<p><b>Combinations = order does not matter.</b></p>\n<p>\\[ \\binom{n}{k} = \\frac{n!}{k!\\,(n-k)!}. \\]</p>\n<p>Compute by cancellation, never full factorials: \\(\\binom{8}{3} = \\dfrac{8\\cdot 7\\cdot 6}{3\\cdot 2\\cdot 1} = 56\\). Use the symmetry \\(\\binom{n}{k} = \\binom{n}{\\,n-k}\\), so \\(\\binom{10}{8} = \\binom{10}{2} = 45\\); and \\(\\binom{n}{2} = \\dfrac{n(n-1)}{2}\\) should be instant.</p>\n<h4>The decision rule — where all the marks live</h4>\n<p>Ask: <b>\"if I swap two chosen items, is it a different outcome?\"</b> Yes \\(\\to\\) permutation (rankings, president &amp; secretary, PIN codes). No \\(\\to\\) combination (teams, committees, handshakes, choosing books).</p>\n<p><b>Worked example.</b> From 10 people: a president <i>and</i> a secretary (order matters) \\(= 10\\times 9 = 90\\). A committee of 2 (order does not) \\(= \\binom{10}{2} = 45\\). Exactly half — because each pair was counted twice when order mattered. If you can articulate <i>that</i>, you own this skill.</p>\n<h4>Multi-group selections multiply</h4>\n<p><b>Worked example.</b> Choose 2 men from 5 <i>and</i> 2 women from 4: \\(\\binom{5}{2}\\binom{4}{2} = 10\\times 6 = 60\\).</p>\n<h4>\"At least\" problems — split into exact cases</h4>\n<p><b>Worked example.</b> A committee of 4 from 6 men and 5 women, with at least 3 women:<br>\nexactly 3W: \\(\\binom{5}{3}\\binom{6}{1} = 60\\); exactly 4W: \\(\\binom{5}{4} = 5\\). Total \\(= \\mathbf{65}\\).<br>\nThe error to avoid: \"choose 3 women first, then anyone for the 4th\" double-counts. Always partition into <b>exact, non-overlapping</b> cases (or use the complement).</p>\n<p><b>Mixed problems = choose, then arrange:</b> \"select 3 of 8 people and seat them in a row\" \\(= \\binom{8}{3}\\times 3!\\). Bonus identity that shows up as a hard question: the number of diagonals of an \\(n\\)-gon is \\(\\binom{n}{2} - n\\).</p>",
          "review": "<ul>\n<li><b>Formula:</b> \\(\\binom{n}{k}=\\frac{n!}{k!(n-k)!}\\); symmetry \\(\\binom{n}{k}=\\binom{n}{n-k}\\).</li>\n<li><b>Swap test:</b> swapping two picks changes the outcome \\(\\Rightarrow\\) permutation; else combination.</li>\n<li><b>Multiple groups:</b> multiply the separate choices.</li>\n<li><b>\"At least\":</b> sum exact, non-overlapping cases (or use complement) — never \"pick the minimum then anyone\".</li>\n<li><b>Mixed:</b> choose then arrange \\(=\\binom{n}{k}\\times k!\\).</li>\n</ul>"
        }
      ]
    },
    {
      "unit": 2,
      "name": "Polynomials",
      "skills": [
        {
          "id": "2.1",
          "title": "2.1 Expanding, factorising, simplifying",
          "explanation": "<p>This skill is pure algebraic fluency — expanding, factorising, and simplifying without slips.</p>\n<h4>Expanding</h4>\n<p>Use the distributive law, and memorise the three identities that appear constantly:</p>\n<p>\\[ (a+b)^2 = a^2 + 2ab + b^2, \\quad (a-b)^2 = a^2 - 2ab + b^2, \\quad (a-b)(a+b) = a^2 - b^2. \\]</p>\n<p><b>Worked example.</b> \\((2x-1)^2 = (2x)^2 - 2(2x)(1) + 1^2 = 4x^2 - 4x + 1\\). The middle term is the one people drop — never forget the \\(2ab\\).</p>\n<h4>Factorising</h4>\n<p>For \\(x^2 + bx + c\\), find two numbers that <b>multiply to \\(c\\)</b> and <b>add to \\(b\\)</b>.<br>\n<b>Worked example.</b> \\(x^2 - 9x + 20\\): two numbers multiplying to 20, adding to \\(-9\\) are \\(-4\\) and \\(-5\\), so \\((x-4)(x-5)\\).</p>\n<p>Know the cubic identities too:</p>\n<p>\\[ a^3 - b^3 = (a-b)(a^2+ab+b^2), \\qquad a^3 + b^3 = (a+b)(a^2-ab+b^2). \\]</p>\n<p><b>Worked example.</b> \\(x^3 - 8 = x^3 - 2^3 = (x-2)(x^2+2x+4)\\).</p>\n<h4>Simplifying fractions: factor, then cancel</h4>\n<p><b>Worked example.</b> \\(\\dfrac{x^2-4}{x+2} = \\dfrac{(x-2)(x+2)}{x+2} = x-2\\) (for \\(x \\neq -2\\)).</p>\n<p><b>Identity trick</b> for \"given/find\" questions: from \\((x+y)^2 = x^2 + 2xy + y^2\\) you get \\(x^2+y^2 = (x+y)^2 - 2xy\\). So if \\(x+y=7\\) and \\(xy=10\\), then \\(x^2+y^2 = 49-20 = 29\\) — no need to find \\(x\\) and \\(y\\) themselves.</p>",
          "review": "<ul>\n<li><b>Identities:</b> \\((a\\pm b)^2 = a^2 \\pm 2ab + b^2\\); \\(a^2-b^2=(a-b)(a+b)\\); \\(a^3\\mp b^3=(a\\mp b)(a^2\\pm ab+b^2)\\).</li>\n<li><b>Factor \\(x^2+bx+c\\):</b> two numbers multiply to \\(c\\), add to \\(b\\).</li>\n<li><b>Simplify:</b> factor numerator and denominator, then cancel.</li>\n<li><b>Trap:</b> dropping the middle \\(2ab\\) term when squaring a binomial.</li>\n</ul>"
        },
        {
          "id": "2.2",
          "title": "2.2 Roots of polynomials",
          "explanation": "<h4>Quadratic formula</h4>\n<p>For \\(ax^2 + bx + c = 0\\):</p>\n<p>\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}. \\]</p>\n<p>The <b>discriminant</b> \\(\\Delta = b^2 - 4ac\\) tells you the nature of the roots: \\(\\Delta>0\\) two real roots, \\(\\Delta=0\\) one repeated root, \\(\\Delta<0\\) no real roots.</p>\n<h4>Vieta's formulas — fast facts about roots without solving</h4>\n<p>If \\(\\alpha, \\beta\\) are the roots of \\(ax^2+bx+c=0\\):</p>\n<p>\\[ \\alpha + \\beta = -\\frac{b}{a}, \\qquad \\alpha\\beta = \\frac{c}{a}. \\]</p>\n<p><b>Worked example.</b> Roots of \\(x^2 - 5x + 6 = 0\\): sum \\(= 5\\), product \\(= 6\\) (the roots are 2 and 3). Many questions ask only for the sum or product — Vieta gives it instantly.</p>\n<p><b>Worked example (combined with identities).</b> If \\(\\alpha,\\beta\\) are roots of \\(x^2+3x-5=0\\), find \\(\\alpha^2+\\beta^2\\).<br>\n\\(\\alpha+\\beta=-3\\), \\(\\alpha\\beta=-5\\), so \\(\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta = 9-2(-5)=19\\).</p>\n<h4>Cubics</h4>\n<p>Solve by spotting a root (try small integers like \\(\\pm 1, \\pm 2\\)) and factoring it out.<br>\n<b>Worked example.</b> \\(x^3 - 6x^2 + 11x - 6 = 0\\) factors as \\((x-1)(x-2)(x-3)=0\\), so roots \\(1, 2, 3\\).</p>",
          "review": "<ul>\n<li><b>Quadratic formula:</b> \\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\); discriminant \\(\\Delta=b^2-4ac\\).</li>\n<li><b>Vieta:</b> sum \\(=-\\frac{b}{a}\\), product \\(=\\frac{c}{a}\\).</li>\n<li><b>Combine with identities:</b> \\(\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta\\).</li>\n<li><b>Cubics:</b> guess an integer root, factor it out, solve the rest.</li>\n</ul>"
        },
        {
          "id": "2.3",
          "title": "2.3 Inequalities",
          "explanation": "<h4>Linear inequalities</h4>\n<p>Solve like an equation, with one rule: <b>multiplying or dividing by a negative flips the inequality sign.</b><br>\n<b>Worked example.</b> \\(2x - 5 < 7 \\Rightarrow 2x < 12 \\Rightarrow x < 6\\).</p>\n<h4>Quadratic inequalities — the sketch method</h4>\n<p>Move everything to one side, factor to find the roots, then decide which region works. For \\((x-r_1)(x-r_2) < 0\\) the solution is <b>between</b> the roots; for \\(> 0\\) it is <b>outside</b> the roots (a parabola opening upward is negative only between its roots).</p>\n<p><b>Worked example.</b> \\(x^2 - 4x - 5 \\le 0 \\Rightarrow (x-5)(x+1) \\le 0 \\Rightarrow -1 \\le x \\le 5\\) (between).</p>\n<p><b>Worked example.</b> \\(x^2 > 9 \\Rightarrow x < -3 \\text{ or } x > 3\\) (outside). A very common trap is writing \\(x > 3\\) only and forgetting the negative branch.</p>\n<h4>\"For all \\(x\\)\" conditions use the discriminant</h4>\n<p><b>Worked example.</b> Find all \\(k\\) so that \\(x^2 + kx + 9 > 0\\) for every real \\(x\\).<br>\nAn upward parabola is always positive exactly when it has no real roots: \\(\\Delta < 0 \\Rightarrow k^2 - 36 < 0 \\Rightarrow -6 < k < 6\\).</p>\n<h4>Simultaneous inequalities</h4>\n<p>Solve each separately, then take the overlap. \\(x+2>5\\) and \\(3x<21\\) give \\(x>3\\) and \\(x<7\\), i.e. \\(3<x<7\\) — three integers (4, 5, 6).</p>",
          "review": "<ul>\n<li><b>Flip the sign</b> when multiplying/dividing by a negative.</li>\n<li><b>Quadratic:</b> factor, then \"\\(<0\\) between roots, \\(>0\\) outside roots\".</li>\n<li><b>\"For all \\(x\\) positive\":</b> upward parabola with \\(\\Delta<0\\).</li>\n<li><b>Simultaneous:</b> solve each, take the intersection.</li>\n<li><b>Trap:</b> giving only one branch of \\(x^2>a\\) (forgetting \\(x<-\\sqrt a\\)).</li>\n</ul>"
        },
        {
          "id": "2.4",
          "title": "2.4 Simultaneous equations",
          "explanation": "<h4>Two linear equations</h4>\n<p>Use <b>elimination</b> (add/subtract to cancel a variable) or <b>substitution</b>.<br>\n<b>Worked example.</b> \\(x+y=10\\) and \\(x-y=4\\): adding gives \\(2x=14\\Rightarrow x=7\\), so \\(y=3\\).</p>\n<h4>One linear, one quadratic — always substitute</h4>\n<p>Solve the linear equation for one variable and substitute into the quadratic; you get a single quadratic to solve.</p>\n<p><b>Worked example.</b> \\(y = x+1\\) and \\(y = x^2 - 1\\). Then \\(x+1 = x^2-1 \\Rightarrow x^2 - x - 2 = 0 \\Rightarrow (x-2)(x+1)=0\\), so \\(x=2\\) or \\(x=-1\\), giving points \\((2,3)\\) and \\((-1,0)\\).</p>\n<h4>Tangency = exactly one solution = discriminant zero</h4>\n<p>A line is tangent to a curve when the combined equation has a repeated root.<br>\n<b>Worked example.</b> For \\(y = 2x + c\\) to meet \\(y = x^2\\) exactly once: \\(x^2 - 2x - c = 0\\) needs \\(\\Delta = 0 \\Rightarrow 4 + 4c = 0 \\Rightarrow c = -1\\).</p>\n<h4>Symmetric-system shortcut</h4>\n<p>Use \\(x^2+y^2 = (x+y)^2 - 2xy\\). If \\(x+y=5\\) and \\(xy=6\\), then \\(x^2+y^2 = 25-12 = 13\\) without solving for \\(x,y\\).</p>",
          "review": "<ul>\n<li><b>Two linear:</b> elimination or substitution.</li>\n<li><b>Linear + quadratic:</b> substitute the linear into the quadratic \\(\\to\\) one quadratic.</li>\n<li><b>Tangent / unique solution:</b> discriminant \\(=0\\).</li>\n<li><b>Symmetric:</b> \\(x^2+y^2=(x+y)^2-2xy\\).</li>\n</ul>"
        },
        {
          "id": "2.5",
          "title": "2.5 Polynomial division",
          "explanation": "<h4>Polynomial long division</h4>\n<p>Works like numerical long division: divide leading terms, multiply back, subtract, bring down, repeat. The result is <b>quotient</b> plus <b>remainder</b>, where the remainder has lower degree than the divisor.</p>\n<p><b>Worked example.</b> \\(x^3 - 1\\) divided by \\(x - 1\\). Since \\(x^3-1=(x-1)(x^2+x+1)\\), the quotient is \\(x^2+x+1\\) and the remainder is 0.</p>\n<h4>The Remainder Theorem — your shortcut</h4>\n<p>The remainder when \\(f(x)\\) is divided by \\((x - a)\\) is simply \\(f(a)\\). No long division needed for the remainder.</p>\n<p>\\[ f(x) = (x-a)\\,q(x) + f(a). \\]</p>\n<p><b>Worked example.</b> Remainder of \\(x^2 + 5x + 7\\) divided by \\(x+2\\): here \\(a=-2\\), so \\(f(-2) = 4 - 10 + 7 = 1\\).</p>\n<h4>The Factor Theorem</h4>\n<p>\\((x-a)\\) is a factor of \\(f(x)\\) exactly when \\(f(a)=0\\). This is how you find roots of cubics.</p>\n<h4>Dividing by a quadratic</h4>\n<p>The remainder can be linear (degree up to 1). A neat trick: if \\(p(x)\\) leaves remainder \\(R_1\\) at \\(x=1\\) and \\(R_2\\) at \\(x=2\\), the remainder on dividing by \\((x-1)(x-2)\\) is the line \\(ax+b\\) with \\(a+b=R_1\\) and \\(2a+b=R_2\\).</p>",
          "review": "<ul>\n<li><b>Division:</b> gives quotient \\(q(x)\\) and remainder of lower degree than the divisor.</li>\n<li><b>Remainder Theorem:</b> remainder on dividing by \\((x-a)\\) is \\(f(a)\\).</li>\n<li><b>Factor Theorem:</b> \\((x-a)\\) is a factor \\(\\iff f(a)=0\\).</li>\n<li><b>By a quadratic:</b> remainder is at most linear; solve two simultaneous conditions for \\(ax+b\\).</li>\n</ul>"
        }
      ]
    },
    {
      "unit": 3,
      "name": "Geometry",
      "skills": [
        {
          "id": "3.1",
          "title": "3.1 Triangles by sides; Pythagoras",
          "explanation": "<h4>Triangle types</h4>\n<p><b>Equilateral</b> (all sides/angles equal, angles \\(60^\\circ\\)), <b>isosceles</b> (two equal sides, two equal base angles), <b>scalene</b> (all different), <b>right-angled</b> (one \\(90^\\circ\\) angle).</p>\n<h4>Pythagoras' theorem</h4>\n<p>In a right triangle with legs \\(a, b\\) and hypotenuse \\(c\\):</p>\n<p>\\[ a^2 + b^2 = c^2. \\]</p>\n<p><b>Worked example.</b> Legs 5 and 12: \\(c = \\sqrt{25 + 144} = \\sqrt{169} = 13\\).</p>\n<p>Memorise the common <b>Pythagorean triples</b> so you recognise them instantly: \\((3,4,5)\\), \\((5,12,13)\\), \\((8,15,17)\\), \\((7,24,25)\\), and their multiples like \\((6,8,10)\\) and \\((9,12,15)\\).</p>\n<h4>Equilateral triangle area</h4>\n<p>\\[ \\text{Area} = \\frac{\\sqrt{3}}{4}\\,s^2. \\]</p>\n<p><b>Worked example.</b> Side 6: area \\(= \\tfrac{\\sqrt3}{4}\\cdot 36 = 9\\sqrt3\\).</p>\n<p><b>Worked example (recognising a triple).</b> A right triangle has hypotenuse 10 and a leg 6 — that is a \\((6,8,10)\\) triple, so the other leg is 8 and the area is \\(\\tfrac12(6)(8)=24\\).</p>",
          "review": "<ul>\n<li><b>Pythagoras:</b> \\(a^2+b^2=c^2\\) (right triangles only).</li>\n<li><b>Triples:</b> \\((3,4,5),(5,12,13),(8,15,17),(7,24,25)\\) and multiples.</li>\n<li><b>Equilateral area:</b> \\(\\frac{\\sqrt3}{4}s^2\\).</li>\n<li><b>Trap:</b> using Pythagoras on a non-right triangle.</li>\n</ul>"
        },
        {
          "id": "3.2",
          "title": "3.2 Trigonometry in right triangles",
          "explanation": "<h4>The trig ratios (right triangles): SOH-CAH-TOA</h4>\n<p>\\[ \\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\quad \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\quad \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}. \\]</p>\n<h4>Exact values you must recall (no calculator)</h4>\n<p>\\[ \\sin 30^\\circ = \\tfrac12,\\ \\cos 30^\\circ = \\tfrac{\\sqrt3}{2},\\ \\tan 30^\\circ = \\tfrac{1}{\\sqrt3}; \\quad \\sin 45^\\circ = \\cos 45^\\circ = \\tfrac{1}{\\sqrt2}; \\quad \\sin 60^\\circ = \\tfrac{\\sqrt3}{2},\\ \\cos 60^\\circ = \\tfrac12,\\ \\tan 60^\\circ = \\sqrt3. \\]</p>\n<h4>Radians</h4>\n<p>\\(180^\\circ = \\pi\\) radians, so multiply degrees by \\(\\tfrac{\\pi}{180}\\).<br>\n<b>Worked example.</b> \\(135^\\circ = 135\\cdot\\tfrac{\\pi}{180} = \\tfrac{3\\pi}{4}\\).</p>\n<h4>Area with two sides and the included angle</h4>\n<p>\\[ \\text{Area} = \\tfrac12\\, a b \\sin C. \\]</p>\n<p><b>Worked example.</b> Sides 8 and 6 with included angle \\(30^\\circ\\): area \\(= \\tfrac12(8)(6)\\sin 30^\\circ = 24\\cdot\\tfrac12 = 12\\).</p>\n<p><b>Maximising area:</b> \\(\\sin C\\) is largest at \\(C = 90^\\circ\\), so the maximum area for two given sides \\(a, b\\) is \\(\\tfrac12 ab\\). (Two sides 7 and 4 give max area \\(\\tfrac12(7)(4)=14\\).)</p>",
          "review": "<ul>\n<li><b>SOH-CAH-TOA</b> for right triangles.</li>\n<li><b>Exact values</b> for \\(30^\\circ,45^\\circ,60^\\circ\\) — memorise the table.</li>\n<li><b>Radians:</b> \\(180^\\circ=\\pi\\); degrees \\(\\times\\frac{\\pi}{180}\\).</li>\n<li><b>Area:</b> \\(\\frac12 ab\\sin C\\); maximised at \\(C=90^\\circ\\) giving \\(\\frac12 ab\\).</li>\n</ul>"
        },
        {
          "id": "3.3",
          "title": "3.3 Angle properties",
          "explanation": "<h4>Angles on lines and in triangles</h4>\n<p>Angles on a straight line sum to \\(180^\\circ\\); around a point, \\(360^\\circ\\). Angles in a triangle sum to \\(180^\\circ\\); in any quadrilateral, \\(360^\\circ\\). With parallel lines, look for equal alternate (\"Z\") angles, equal corresponding (\"F\") angles, and co-interior (\"C\") angles that sum to \\(180^\\circ\\).</p>\n<h4>Polygons</h4>\n<p>\\[ \\text{Interior angle sum} = (n-2)\\times 180^\\circ, \\qquad \\text{each exterior angle of a regular polygon} = \\frac{360^\\circ}{n}. \\]</p>\n<p><b>Worked example.</b> Pentagon interior sum \\(= (5-2)\\times 180 = 540^\\circ\\). Regular hexagon exterior angle \\(= 360/6 = 60^\\circ\\).</p>\n<p>Reverse it too: if each interior angle is \\(156^\\circ\\), the exterior angle is \\(24^\\circ\\), so \\(n = 360/24 = 15\\) sides.</p>\n<h4>Circle angle facts</h4>\n<p>The angle at the centre is twice the angle at the circumference on the same arc. The <b>angle in a semicircle is \\(90^\\circ\\)</b>. Angles in the same segment are equal.</p>\n<p><b>Worked example.</b> A triangle inscribed in a circle with one side a diameter has a right angle opposite that diameter; if another angle is \\(35^\\circ\\), the third is \\(90 - 35 = 55^\\circ\\).</p>",
          "review": "<ul>\n<li><b>Sums:</b> line \\(180^\\circ\\), point \\(360^\\circ\\), triangle \\(180^\\circ\\), quadrilateral \\(360^\\circ\\).</li>\n<li><b>Polygon:</b> interior sum \\((n-2)180^\\circ\\); regular exterior \\(\\frac{360^\\circ}{n}\\).</li>\n<li><b>Circle:</b> centre angle \\(=2\\times\\) circumference angle; semicircle angle \\(=90^\\circ\\).</li>\n<li><b>Parallel lines:</b> alternate equal, corresponding equal, co-interior sum to \\(180^\\circ\\).</li>\n</ul>"
        },
        {
          "id": "3.4",
          "title": "3.4 Quadrilaterals",
          "explanation": "<h4>Know each quadrilateral's properties</h4>\n<p><b>Square</b> (4 equal sides, 4 right angles), <b>rectangle</b> (opposite sides equal, 4 right angles), <b>parallelogram</b> (opposite sides parallel and equal), <b>rhombus</b> (4 equal sides, diagonals perpendicular), <b>trapezium</b> (one pair of parallel sides).</p>\n<h4>Area formulas</h4>\n<p>\\[ \\text{Rectangle} = lw, \\quad \\text{Parallelogram} = b h, \\quad \\text{Trapezium} = \\tfrac12 (a+b)h, \\quad \\text{Rhombus} = \\tfrac12 d_1 d_2. \\]</p>\n<p><b>Worked example.</b> Trapezium with parallel sides 6 and 10 and height 4: area \\(= \\tfrac12(6+10)(4) = 32\\).</p>\n<p><b>Worked example (rhombus via diagonals).</b> Diagonals 6 and 8: area \\(= \\tfrac12(6)(8) = 24\\). The diagonals bisect each other at right angles, so the side is \\(\\sqrt{3^2+4^2}=5\\).</p>\n<h4>A common percentage trap</h4>\n<p>If a rectangle's length rises 20% and its width falls 20%, the area becomes \\(1.2 \\times 0.8 = 0.96\\) of the original — a <b>4% decrease</b>, not \"no change\".</p>",
          "review": "<ul>\n<li><b>Areas:</b> rectangle \\(lw\\); parallelogram \\(bh\\); trapezium \\(\\frac12(a+b)h\\); rhombus \\(\\frac12 d_1 d_2\\).</li>\n<li><b>Rhombus diagonals:</b> perpendicular and bisecting \\(\\Rightarrow\\) side \\(=\\sqrt{(d_1/2)^2+(d_2/2)^2}\\).</li>\n<li><b>Trap:</b> \\(+20\\%\\) then \\(-20\\%\\) is a net \\(-4\\%\\), not zero.</li>\n</ul>"
        },
        {
          "id": "3.5",
          "title": "3.5 Circles",
          "explanation": "<h4>Core circle formulas</h4>\n<p>\\[ \\text{Circumference} = 2\\pi r, \\qquad \\text{Area} = \\pi r^2. \\]</p>\n<h4>Arc length and sector area (angle in radians)</h4>\n<p>\\[ \\text{arc length} = r\\theta, \\qquad \\text{sector area} = \\tfrac12 r^2 \\theta. \\]</p>\n<p>(In degrees, multiply the full circle by \\(\\tfrac{\\theta}{360^\\circ}\\): arc \\(= \\tfrac{\\theta}{360}\\cdot 2\\pi r\\), sector \\(= \\tfrac{\\theta}{360}\\cdot \\pi r^2\\).)</p>\n<p><b>Worked example.</b> Radius 6, central angle \\(60^\\circ = \\tfrac{\\pi}{3}\\): arc \\(= 6\\cdot\\tfrac{\\pi}{3} = 2\\pi\\); sector area \\(= \\tfrac12(36)\\tfrac{\\pi}{3} = 6\\pi\\).</p>\n<h4>The tangent–radius right angle</h4>\n<p>A tangent is <b>perpendicular to the radius</b> at the point of contact — this creates a right triangle you solve with Pythagoras.</p>\n<p><b>Worked example.</b> From a point 13 from the centre of a circle of radius 5, the tangent length is \\(\\sqrt{13^2 - 5^2} = \\sqrt{144} = 12\\).</p>\n<h4>Chords</h4>\n<p>The perpendicular from the centre bisects a chord. A chord 6 from the centre of a radius-10 circle has length \\(2\\sqrt{10^2 - 6^2} = 2\\sqrt{64} = 16\\).</p>",
          "review": "<ul>\n<li><b>Circle:</b> circumference \\(2\\pi r\\), area \\(\\pi r^2\\).</li>\n<li><b>Radians:</b> arc \\(=r\\theta\\), sector \\(=\\frac12 r^2\\theta\\).</li>\n<li><b>Tangent \\(\\perp\\) radius:</b> tangent length \\(=\\sqrt{d^2-r^2}\\).</li>\n<li><b>Chord:</b> perpendicular from centre bisects it \\(\\Rightarrow\\) half-chord \\(=\\sqrt{r^2-d^2}\\).</li>\n</ul>"
        },
        {
          "id": "3.6",
          "title": "3.6 Composite shapes",
          "explanation": "<p>Composite shapes are built from the simple shapes above. The whole skill is <b>decomposition</b>: break the figure into pieces, compute each, then add (or subtract a hole).</p>\n<h4>Add the parts</h4>\n<p><b>Worked example.</b> A square of side 4 with a semicircle (diameter 4) on top: area \\(= 4^2 + \\tfrac12\\pi(2)^2 = 16 + 2\\pi\\).</p>\n<h4>Subtract a hole</h4>\n<p><b>Worked example.</b> A circle of radius 4 inscribed in a square of side 8 — area inside the square but outside the circle: \\(8^2 - \\pi(4)^2 = 64 - 16\\pi\\).</p>\n<h4>Perimeter needs care</h4>\n<p>Only count edges on the <b>outside</b> of the figure. A semicircle's perimeter is the curved arc <i>plus</i> the straight diameter: for diameter 10, that is \\(5\\pi + 10\\) (not just the arc).</p>\n<p><b>Worked example (clever combination).</b> Four quarter-circles of radius 5, one in each corner of a \\(10\\times 10\\) square, together make exactly one full circle of radius 5; the area not covered is \\(100 - 25\\pi\\).</p>\n<p>General method: label every sub-shape, write its area/length, then combine — slow and systematic beats clever-but-wrong.</p>",
          "review": "<ul>\n<li><b>Decompose</b> into squares, triangles, circles, sectors; add areas or subtract holes.</li>\n<li><b>Perimeter:</b> trace only the outer boundary; include straight edges of semicircles.</li>\n<li><b>Spot combinations:</b> four quarter-circles \\(=\\) one full circle, etc.</li>\n<li><b>Trap:</b> counting an internal edge in a perimeter, or forgetting a semicircle's diameter.</li>\n</ul>"
        }
      ]
    },
    {
      "unit": 4,
      "name": "Functions",
      "skills": [
        {
          "id": "4.1",
          "title": "4.1 Types of function; odd and even",
          "explanation": "<h4>The function families to recognise</h4>\n<p><b>Linear</b> \\(ax+b\\) (straight line); <b>quadratic</b> \\(ax^2+bx+c\\) (parabola); <b>polynomial</b> (sum of power terms); <b>rational</b> (a ratio of polynomials); <b>exponential</b> \\(a^x\\) (variable in the exponent); <b>logarithmic</b> \\(\\log_a x\\); <b>trigonometric</b> \\(\\sin, \\cos, \\tan\\).</p>\n<h4>Odd and even functions</h4>\n<p>\\[ \\text{Even:}\\ f(-x) = f(x) \\quad\\text{(symmetric about the } y\\text{-axis)}; \\qquad \\text{Odd:}\\ f(-x) = -f(x) \\quad\\text{(symmetric about the origin)}. \\]</p>\n<p><b>The test:</b> replace \\(x\\) with \\(-x\\) and compare. If you get the original back, it is even; if you get the negative of the original, it is odd; otherwise neither.</p>\n<p><b>Worked example.</b> \\(f(x) = x^3 - x\\): \\(f(-x) = -x^3 + x = -(x^3 - x) = -f(x)\\) — <b>odd</b>.<br>\n\\(g(x) = x^4 + 1\\): \\(g(-x) = x^4 + 1 = g(x)\\) — <b>even</b>.</p>\n<p><b>Quick rule:</b> a polynomial is even if all its powers are even (a constant counts as even), and odd if all its powers are odd (no constant term). \\(x^3 + ax^2 + bx + c\\) is odd only when \\(a = 0\\) and \\(c = 0\\).</p>\n<p><b>Worked example (using the definition).</b> If \\(f\\) is even and \\(f(3) = 7\\), then \\(f(-3) = 7\\). If \\(f\\) is odd and \\(f(2) = 5\\), then \\(f(-2) = -5\\) (and \\(f(0)=0\\)).</p>",
          "review": "<ul>\n<li><b>Even:</b> \\(f(-x)=f(x)\\) (y-axis symmetry). <b>Odd:</b> \\(f(-x)=-f(x)\\) (origin symmetry).</li>\n<li><b>Test:</b> substitute \\(-x\\) and compare to \\(f(x)\\).</li>\n<li><b>Polynomials:</b> all even powers \\(\\Rightarrow\\) even; all odd powers, no constant \\(\\Rightarrow\\) odd.</li>\n<li><b>Exponential</b> = variable in exponent \\(a^x\\); don't confuse with power \\(x^a\\).</li>\n</ul>"
        },
        {
          "id": "4.2",
          "title": "4.2 Domain and range",
          "explanation": "<p><b>Domain</b> = all allowed inputs \\(x\\); <b>range</b> = all possible outputs \\(y\\).</p>\n<h4>The three things that restrict a domain</h4>\n<ol>\n<li><b>Denominators</b> cannot be zero.</li>\n<li><b>Square roots</b> need a non-negative inside (radicand \\(\\ge 0\\)).</li>\n<li><b>Logarithms</b> need a strictly positive inside.</li>\n</ol>\n<p><b>Worked example.</b> \\(f(x) = \\dfrac{1}{x-4}\\): domain is all \\(x \\neq 4\\).</p>\n<p><b>Worked example.</b> \\(f(x) = \\sqrt{x+5}\\): need \\(x + 5 \\ge 0\\), so domain \\(x \\ge -5\\).</p>\n<p><b>Worked example (combined — the hard type).</b> \\(f(x) = \\dfrac{1}{\\sqrt{9 - x^2}}\\): the root must be defined <i>and</i> the denominator non-zero, so \\(9 - x^2 > 0\\) (strictly), giving \\(-3 < x < 3\\).</p>\n<p><b>Worked example.</b> \\(f(x) = \\dfrac{x+1}{x^2 - x - 6} = \\dfrac{x+1}{(x-3)(x+2)}\\): domain is all \\(x\\) except \\(3\\) and \\(-2\\).</p>\n<h4>Range of a quadratic</h4>\n<p>Find the vertex. For \\(f(x) = x^2 + 3\\), the minimum is 3 (at \\(x=0\\)), so the range is \\(y \\ge 3\\). For a downward parabola \\(-x^2 + 4x + 1\\), the vertex at \\(x=2\\) gives a maximum of 5, so range \\(y \\le 5\\).</p>",
          "review": "<ul>\n<li><b>Domain blockers:</b> denominator \\(\\neq 0\\); under a root \\(\\ge 0\\); inside a log \\(>0\\).</li>\n<li><b>Combine conditions</b> when a root sits in a denominator (use strict \\(>0\\)).</li>\n<li><b>Quadratic range:</b> from the vertex — \\(y\\ge\\) min (opens up) or \\(y\\le\\) max (opens down).</li>\n</ul>"
        },
        {
          "id": "4.3",
          "title": "4.3 Function arithmetic",
          "explanation": "<p>Functions combine value-by-value at each \\(x\\):</p>\n<p>\\[ (f+g)(x) = f(x)+g(x), \\quad (f-g)(x) = f(x)-g(x), \\quad (fg)(x) = f(x)\\,g(x), \\quad \\left(\\tfrac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)}. \\]</p>\n<p>For the quotient, exclude any \\(x\\) where \\(g(x) = 0\\).</p>\n<p><b>Worked example.</b> \\(f(x) = x+2\\), \\(g(x) = x^2\\). Then \\((f+g)(3) = 5 + 9 = 14\\) and \\((fg)(2) = 4 \\times 4 = 16\\) (since \\(f(2)=4, g(2)=4\\)).</p>\n<p><b>Worked example (quotient and its domain).</b> \\(f(x) = x^2 - 4\\), \\(g(x) = x+2\\). Then \\(\\left(\\tfrac{f}{g}\\right)(x) = \\dfrac{(x-2)(x+2)}{x+2} = x-2\\), but it is undefined at \\(x = -2\\) — the simplified form still inherits the original restriction.</p>\n<p><b>Worked example (difference as a function).</b> \\(f(x) = 2x+1\\): \\(f(x+1) - f(x-1) = (2x+3) - (2x-1) = 4\\), a constant.</p>",
          "review": "<ul>\n<li><b>Operate pointwise:</b> add/subtract/multiply/divide the outputs at each \\(x\\).</li>\n<li><b>Quotient domain:</b> exclude \\(x\\) with \\(g(x)=0\\) — even after cancelling.</li>\n<li><b>Evaluate</b> each function first, then combine the numbers.</li>\n</ul>"
        },
        {
          "id": "4.4",
          "title": "4.4 Composition of functions",
          "explanation": "<p><b>Composition</b> means feeding one function's output into another:</p>\n<p>\\[ (f\\circ g)(x) = f\\big(g(x)\\big) \\quad\\text{— do } g \\text{ first, then } f. \\]</p>\n<p><b>Order matters:</b> \\(f(g(x))\\) is generally not \\(g(f(x))\\).</p>\n<p><b>Worked example.</b> \\(f(x) = 2x+1\\), \\(g(x) = x^2\\).<br>\n\\(f(g(2)) = f(4) = 9\\); but \\(g(f(2)) = g(5) = 25\\). Different, as expected.<br>\nAs expressions: \\(f(g(x)) = 2x^2 + 1\\), while \\(g(f(x)) = (2x+1)^2 = 4x^2 + 4x + 1\\).</p>\n<p><b>Worked example (work inside-out).</b> \\(f(x) = x+3\\), \\(g(x) = \\sqrt{x}\\): \\(g(f(6)) = g(9) = 3\\).</p>\n<p><b>Worked example (solve for the inner function).</b> If \\(f(x) = 3x - 2\\) and \\(f(g(x)) = 6x + 1\\), then \\(3g(x) - 2 = 6x + 1 \\Rightarrow 3g(x) = 6x + 3 \\Rightarrow g(x) = 2x + 1\\).</p>\n<p><b>Repeated composition.</b> \\(f(x) = x+2\\): \\(f(f(f(1))) = f(f(3)) = f(5) = 7\\) — just chain it step by step.</p>",
          "review": "<ul>\n<li><b>Definition:</b> \\((f\\circ g)(x)=f(g(x))\\) — inner function first.</li>\n<li><b>Not commutative:</b> \\(f(g(x))\\neq g(f(x))\\) in general.</li>\n<li><b>Reverse problems:</b> set up \\(f(g(x))=\\) given, then solve for \\(g\\).</li>\n<li><b>Evaluate inside-out</b>, one layer at a time.</li>\n</ul>"
        },
        {
          "id": "4.5",
          "title": "4.5 Inverse functions",
          "explanation": "<p>The inverse \\(f^{-1}\\) <b>undoes</b> \\(f\\): if \\(f(a) = b\\) then \\(f^{-1}(b) = a\\). So \\(f(f^{-1}(x)) = x\\).</p>\n<h4>When does an inverse exist?</h4>\n<p>Only if \\(f\\) is <b>one-to-one</b> (each output comes from exactly one input — it passes the horizontal line test). \\(f(x) = x^2\\) on all reals has <b>no</b> inverse, because \\(2\\) and \\(-2\\) both map to \\(4\\); but restricting to \\(x \\ge 0\\) makes it invertible.</p>\n<h4>How to find an inverse (3 steps)</h4>\n<p>Write \\(y = f(x)\\); <b>swap</b> \\(x\\) and \\(y\\); solve for \\(y\\).</p>\n<p><b>Worked example.</b> \\(f(x) = 3x - 6\\): write \\(x = 3y - 6 \\Rightarrow y = \\dfrac{x+6}{3}\\), so \\(f^{-1}(x) = \\dfrac{x+6}{3}\\).</p>\n<p><b>Worked example (rational).</b> \\(f(x) = \\dfrac{2x+3}{x-1}\\): swap to \\(x = \\dfrac{2y+3}{y-1}\\), so \\(x(y-1) = 2y+3 \\Rightarrow xy - x = 2y + 3 \\Rightarrow y(x-2) = x+3 \\Rightarrow f^{-1}(x) = \\dfrac{x+3}{x-2}\\).</p>\n<p><b>Worked example (use the undo property).</b> If \\(f(x) = x^3\\), then \\(f^{-1}(8) = \\sqrt[3]{8} = 2\\). And to find \\(f^{-1}(7)\\) for \\(f(x)=2x+k\\) given \\(f^{-1}(7)=2\\): that just says \\(f(2)=7\\), i.e. \\(4+k=7\\), so \\(k=3\\).</p>",
          "review": "<ul>\n<li><b>Meaning:</b> \\(f^{-1}\\) undoes \\(f\\); \\(f(a)=b \\iff f^{-1}(b)=a\\).</li>\n<li><b>Exists</b> only when \\(f\\) is one-to-one (horizontal line test).</li>\n<li><b>Method:</b> set \\(y=f(x)\\), swap \\(x\\leftrightarrow y\\), solve for \\(y\\).</li>\n<li><b>Shortcut:</b> \\(f^{-1}(b)=a\\) means \\(f(a)=b\\) — often faster than finding the full inverse.</li>\n</ul>"
        }
      ]
    },
    {
      "unit": 5,
      "name": "Series, Powers, Roots",
      "skills": [
        {
          "id": "5.1",
          "title": "5.1 Arithmetic progression",
          "explanation": "<p>An <b>arithmetic progression (AP)</b> adds a fixed <b>common difference</b> \\(d\\) each step. With first term \\(a\\):</p>\n<p>\\[ n\\text{th term: } a_n = a + (n-1)d; \\qquad \\text{sum of } n \\text{ terms: } S_n = \\frac{n}{2}\\big(2a + (n-1)d\\big) = \\frac{n}{2}(a + a_n). \\]</p>\n<p><b>Worked example.</b> \\(a = 3\\), \\(d = 4\\): the 10th term is \\(3 + 9(4) = 39\\).</p>\n<p><b>Worked example (sum).</b> \\(a=2\\), \\(d=3\\), first 15 terms: \\(S_{15} = \\tfrac{15}{2}(2\\cdot2 + 14\\cdot3) = \\tfrac{15}{2}(46) = 345\\).</p>\n<p><b>Worked example (find \\(a\\) from two terms).</b> If the 5th term is 17 and the 9th is 33, then \\(4d = 33 - 17 = 16 \\Rightarrow d = 4\\), and \\(a = 17 - 4d = 1\\).</p>\n<p><b>Useful facts:</b> \\(1 + 2 + \\dots + n = \\dfrac{n(n+1)}{2}\\) (the AP with \\(a=d=1\\)). The mean of an AP equals its middle term. If you are given \\(S_n\\) as a formula, recover a single term via \\(a_n = S_n - S_{n-1}\\).</p>",
          "review": "<ul>\n<li><b>nth term:</b> \\(a_n=a+(n-1)d\\).</li>\n<li><b>Sum:</b> \\(S_n=\\frac{n}{2}(2a+(n-1)d)=\\frac{n}{2}(a+a_n)\\).</li>\n<li><b>\\(1+2+\\dots+n=\\frac{n(n+1)}{2}\\)</b>; mean \\(=\\) middle term.</li>\n<li><b>Single term from sum:</b> \\(a_n=S_n-S_{n-1}\\).</li>\n</ul>"
        },
        {
          "id": "5.2",
          "title": "5.2 Geometric progression",
          "explanation": "<p>A <b>geometric progression (GP)</b> multiplies by a fixed <b>common ratio</b> \\(r\\) each step. With first term \\(a\\):</p>\n<p>\\[ n\\text{th term: } a_n = a\\,r^{\\,n-1}; \\qquad \\text{sum of } n \\text{ terms: } S_n = \\frac{a(r^n - 1)}{r - 1}\\ (r \\neq 1). \\]</p>\n<p>(The spec does <b>not</b> require the sum to infinity, so you only need this finite formula.)</p>\n<p><b>Worked example.</b> \\(a = 2\\), \\(r = 3\\): the 5th term is \\(2\\cdot 3^4 = 162\\).</p>\n<p><b>Worked example (sum).</b> \\(1, 2, 4, \\dots\\) first 6 terms: \\(S_6 = \\dfrac{1(2^6 - 1)}{2-1} = 63\\).</p>\n<p><b>Worked example (find \\(r\\) from two terms).</b> If the 3rd term is 12 and the 5th is 48, then \\(r^2 = \\tfrac{48}{12} = 4\\), so \\(r = \\pm 2\\) — remember the negative ratio is possible.</p>\n<p><b>Geometric mean:</b> the middle term of three in GP satisfies \\(b^2 = ac\\). For 4 and 16, the geometric mean is \\(\\sqrt{64} = 8\\). For \\(x, x+3, x+9\\) in GP: \\((x+3)^2 = x(x+9) \\Rightarrow 6x+9 = 9x \\Rightarrow x = 3\\).</p>",
          "review": "<ul>\n<li><b>nth term:</b> \\(a_n=a\\,r^{n-1}\\).</li>\n<li><b>Sum:</b> \\(S_n=\\frac{a(r^n-1)}{r-1}\\) (finite only).</li>\n<li><b>Two terms \\(\\to r\\):</b> divide; allow \\(r=\\pm\\sqrt{\\cdot}\\).</li>\n<li><b>Geometric mean:</b> \\(b^2=ac\\).</li>\n</ul>"
        },
        {
          "id": "5.3",
          "title": "5.3 Recursive sequences",
          "explanation": "<p>A <b>recursive sequence</b> defines each term from previous ones. The skill is simply <b>iterating carefully</b> — compute term by term and don't lose track.</p>\n<p><b>Worked example.</b> \\(a_1 = 2\\), \\(a_{n+1} = 2a_n + 1\\): the terms are \\(2, 5, 11, 23, \\dots\\), so \\(a_4 = 23\\).</p>\n<p><b>Worked example (Fibonacci-style).</b> \\(a_1 = a_2 = 1\\), \\(a_n = a_{n-1} + a_{n-2}\\): \\(1, 1, 2, 3, 5, 8, \\dots\\), so \\(a_6 = 8\\).</p>\n<h4>Spot the pattern type</h4>\n<p>If \\(a_{n+1} = a_n + d\\) it is secretly an AP; if \\(a_{n+1} = r\\,a_n\\) it is a GP, with explicit formula \\(a_n = a_1 r^{\\,n-1}\\).<br>\n<b>Worked example.</b> \\(a_1 = 2\\), \\(a_{n+1} = 3a_n\\) gives \\(a_n = 2\\cdot 3^{\\,n-1}\\).</p>\n<h4>Watch for cycles (a hard-question favourite)</h4>\n<p><b>Worked example.</b> \\(a_1 = 2\\), \\(a_{n+1} = \\dfrac{1}{1 - a_n}\\): the terms cycle \\(2, -1, \\tfrac12, 2, -1, \\tfrac12, \\dots\\) with period 3. To find \\(a_{2026}\\), note \\(2026 = 3(675) + 1\\), so \\(a_{2026} = a_1 = 2\\). When iteration repeats, use the remainder mod the period instead of computing thousands of terms.</p>",
          "review": "<ul>\n<li><b>Iterate carefully</b>, one term at a time.</li>\n<li><b>Recognise:</b> \\(+d\\Rightarrow\\) AP; \\(\\times r\\Rightarrow\\) GP (explicit \\(a_1 r^{n-1}\\)).</li>\n<li><b>Cycles:</b> if terms repeat with period \\(p\\), use \\(n \\bmod p\\).</li>\n<li><b>Trap:</b> arithmetic slips across many steps — write every term.</li>\n</ul>"
        },
        {
          "id": "5.4",
          "title": "5.4 Powers",
          "explanation": "<h4>The index laws (memorise all of them)</h4>\n<p>\\[ x^a x^b = x^{a+b}, \\quad \\frac{x^a}{x^b} = x^{a-b}, \\quad (x^a)^b = x^{ab}, \\quad x^0 = 1, \\quad x^{-a} = \\frac{1}{x^a}, \\quad x^{a/b} = \\sqrt[b]{x^a}. \\]</p>\n<p><b>Worked example.</b> \\(\\dfrac{x^5 x^3}{x^2} = x^{5+3-2} = x^6\\).</p>\n<p><b>Worked example.</b> \\((2^3)^2 \\cdot 2^{-4} = 2^{6} \\cdot 2^{-4} = 2^{2} = 4\\).</p>\n<p><b>Worked example (fractional power).</b> \\(8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4\\).</p>\n<p><b>Worked example (combine laws).</b> \\(\\dfrac{(x^2 y^3)^3}{(xy)^2} = \\dfrac{x^6 y^9}{x^2 y^2} = x^{4} y^{7}\\).</p>\n<h4>Solving exponential equations: same base</h4>\n<p>Rewrite both sides with the same base, then equate exponents.<br>\n<b>Worked example.</b> \\(4^x = 8^{x-1} \\Rightarrow 2^{2x} = 2^{3(x-1)} \\Rightarrow 2x = 3x - 3 \\Rightarrow x = 3\\).</p>\n<p><b>Worked example (using a given value).</b> If \\(2^x = 5\\), then \\(2^{x+3} = 2^x \\cdot 2^3 = 5 \\cdot 8 = 40\\).</p>",
          "review": "<ul>\n<li><b>Laws:</b> \\(x^ax^b=x^{a+b}\\), \\(\\frac{x^a}{x^b}=x^{a-b}\\), \\((x^a)^b=x^{ab}\\), \\(x^0=1\\), \\(x^{-a}=\\frac1{x^a}\\), \\(x^{a/b}=\\sqrt[b]{x^a}\\).</li>\n<li><b>Equations:</b> rewrite to a common base, then equate exponents.</li>\n<li><b>Trap:</b> adding exponents when you should multiply, or mishandling negative/fractional powers.</li>\n</ul>"
        },
        {
          "id": "5.5",
          "title": "5.5 Roots and surds",
          "explanation": "<h4>Simplifying surds</h4>\n<p>Pull out the largest perfect-square factor: \\(\\sqrt{ab} = \\sqrt{a}\\,\\sqrt{b}\\).<br>\n<b>Worked example.</b> \\(\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}\\). And \\(\\sqrt{8} + \\sqrt{18} = 2\\sqrt2 + 3\\sqrt2 = 5\\sqrt2\\) (combine like surds).</p>\n<h4>Rationalising the denominator</h4>\n<p>For a single surd, multiply top and bottom by that surd: \\(\\dfrac{6}{\\sqrt3} = \\dfrac{6\\sqrt3}{3} = 2\\sqrt3\\).</p>\n<p>For a <b>binomial</b> denominator, multiply by the <b>conjugate</b> (flip the middle sign), which clears the surds via \\((a-b)(a+b)=a^2-b^2\\).<br>\n<b>Worked example.</b> \\(\\dfrac{1}{\\sqrt3 - \\sqrt2} \\cdot \\dfrac{\\sqrt3 + \\sqrt2}{\\sqrt3 + \\sqrt2} = \\dfrac{\\sqrt3+\\sqrt2}{3 - 2} = \\sqrt3 + \\sqrt2\\).</p>\n<p><b>Worked example.</b> \\(\\dfrac{2}{3 - \\sqrt7} \\cdot \\dfrac{3+\\sqrt7}{3+\\sqrt7} = \\dfrac{2(3+\\sqrt7)}{9 - 7} = 3 + \\sqrt7\\).</p>\n<h4>Conjugate products and nested surds</h4>\n<p>\\((\\sqrt5 + \\sqrt2)(\\sqrt5 - \\sqrt2) = 5 - 2 = 3\\). And nested surds can sometimes be un-nested: \\(\\sqrt{5 + 2\\sqrt6} = \\sqrt2 + \\sqrt3\\), because \\((\\sqrt2+\\sqrt3)^2 = 5 + 2\\sqrt6\\).</p>",
          "review": "<ul>\n<li><b>Simplify:</b> factor out the biggest perfect square; combine like surds.</li>\n<li><b>Single surd denom:</b> multiply top and bottom by that surd.</li>\n<li><b>Binomial denom:</b> multiply by the conjugate (flip the sign) \\(\\to (a-b)(a+b)=a^2-b^2\\).</li>\n<li><b>Nested:</b> \\(\\sqrt{p+2\\sqrt q}\\) may equal \\(\\sqrt a+\\sqrt b\\) where \\(a+b=p,\\ ab=q\\).</li>\n</ul>"
        }
      ]
    },
    {
      "unit": 6,
      "name": "Logical Thinking",
      "skills": [
        {
          "id": "6.1",
          "title": "6.1 Logical connectives",
          "explanation": "<p>Logical thinking is about what <b>must follow</b> from given statements. Start with the four connectives.</p>\n<h4>NOT, AND, OR</h4>\n<p><b>AND</b> (\"\\(P\\) and \\(Q\\)\") is true only when both are true. <b>OR</b> is <b>inclusive</b> here: \"\\(P\\) or \\(Q\\)\" is true when at least one holds (possibly both).</p>\n<h4>Negating \"and\"/\"or\" (De Morgan)</h4>\n<p>\\[ \\text{not}(P \\text{ and } Q) = (\\text{not }P)\\ \\text{or}\\ (\\text{not }Q); \\qquad \\text{not}(P \\text{ or } Q) = (\\text{not }P)\\ \\text{and}\\ (\\text{not }Q). \\]</p>\n<p><b>Worked example.</b> \"It is not true that Aziz has both a car and a bike\" only rules out having <i>both</i> — he could still have exactly one. The single safe inference is \"at most one of them\".</p>\n<p><b>Worked example.</b> \"It is not the case that Jasur owns a laptop <i>or</i> a tablet\" means he owns <b>neither</b> (not-laptop and not-tablet).</p>\n<h4>Exclusive \"or\" (\"but not both\")</h4>\n<p>If \"either \\(P\\) or \\(Q\\) but not both\" is true and \\(P\\) is true, then \\(Q\\) must be <b>false</b>.</p>\n<p><b>Negating quantifiers:</b> the negation of \"all passed\" is \"<b>at least one</b> did not pass\" — not \"none passed\".</p>",
          "review": "<ul>\n<li><b>AND</b> needs both true; <b>OR</b> (inclusive) needs at least one.</li>\n<li><b>De Morgan:</b> not(\\(P\\) and \\(Q\\)) = not\\(P\\) or not\\(Q\\); not(\\(P\\) or \\(Q\\)) = not\\(P\\) and not\\(Q\\).</li>\n<li><b>Exclusive or:</b> exactly one is true.</li>\n<li><b>Negation of \"all\":</b> \"at least one is not\" (not \"none\").</li>\n</ul>"
        },
        {
          "id": "6.2",
          "title": "6.2 Conditional statements",
          "explanation": "<p>A <b>conditional</b> \"If \\(x\\) then \\(y\\)\" tells you only about the link between \\(x\\) and \\(y\\). From it, there are exactly <b>two valid deductions</b> and <b>two traps</b>.</p>\n<table style=\"border-collapse:collapse;width:100%;margin:10px 0\">\n<tr style=\"border-bottom:1px solid #ccc\"><th style=\"text-align:left;padding:6px\">You are told</th><th style=\"text-align:left;padding:6px\">You may conclude</th><th style=\"text-align:left;padding:6px\">Status</th></tr>\n<tr><td style=\"padding:6px\">\\(x\\) is true</td><td style=\"padding:6px\">\\(y\\) is true</td><td style=\"padding:6px\"><b>valid</b> (modus ponens)</td></tr>\n<tr><td style=\"padding:6px\">\\(y\\) is false</td><td style=\"padding:6px\">\\(x\\) is false</td><td style=\"padding:6px\"><b>valid</b> (modus tollens)</td></tr>\n<tr><td style=\"padding:6px\">\\(y\\) is true</td><td style=\"padding:6px\">nothing about \\(x\\)</td><td style=\"padding:6px\"><b>trap</b> (affirming the consequent)</td></tr>\n<tr><td style=\"padding:6px\">\\(x\\) is false</td><td style=\"padding:6px\">nothing about \\(y\\)</td><td style=\"padding:6px\"><b>trap</b> (denying the antecedent)</td></tr>\n</table>\n<p><b>Worked example.</b> \"If it rains, the ground gets wet.\" If the ground is <b>dry</b> (\\(y\\) false), you can deduce it did <b>not</b> rain (\\(x\\) false) — valid. But if the ground is <b>wet</b> (\\(y\\) true), you know <b>nothing</b> about rain — it could have been wet for another reason (trap).</p>\n<p><b>Worked example (the consequent trap).</b> \"If Amir studies, he passes.\" Amir passed — did he study? <b>Cannot be determined</b>; he might pass without studying.</p>\n<p>The whole skill: when given extra information, identify which of the four rows you are in. If it is one of the bottom two, the honest answer is \"cannot be determined\" — and that tempting wrong option is exactly what the exam offers.</p>",
          "review": "<ul>\n<li><b>Valid:</b> \\(x\\) true \\(\\Rightarrow y\\) true; \\(y\\) false \\(\\Rightarrow x\\) false.</li>\n<li><b>Traps:</b> \\(y\\) true \\(\\not\\Rightarrow x\\); \\(x\\) false \\(\\not\\Rightarrow\\) anything about \\(y\\).</li>\n<li><b>Contrapositive</b> (\"if not \\(y\\) then not \\(x\\)\") is always equivalent to the original.</li>\n<li>When in a trap row, the answer is \"cannot be determined\".</li>\n</ul>"
        },
        {
          "id": "6.3",
          "title": "6.3 Logical deductions",
          "explanation": "<p>A <b>logical deduction</b> is a conclusion drawn with absolute certainty from given facts — often a puzzle with a constraint like \"exactly two of these statements are true\".</p>\n<h4>The master technique: assume, follow, eliminate</h4>\n<p>Test each possibility against all the statements; whichever leads to a <b>contradiction</b> is impossible, and you keep the survivor.</p>\n<p><b>Worked example.</b> Exactly one of three friends owns a car. Aziz: \"I own it.\" Bek: \"Aziz owns it.\" Davron: \"I do not own it.\" Exactly <b>one</b> statement is true. Who owns it?<br>\nIf <b>Bek</b> owns it: Aziz's claim is false, Bek's claim (\"Aziz owns it\") is false, Davron's (\"I don't own it\") is true — exactly one truth. ✓ The other owners give two truths or none, so the answer is <b>Bek</b>.</p>\n<p><b>Worked example (chained conditionals).</b> Runners take distinct places. \"If X did not win, then Y won.\" \"If Y is not last, then Z won.\" Suppose X did <i>not</i> win: then Y won, so Y is not last, so Z won — but two people cannot both win. Contradiction. Therefore <b>X won</b>.</p>\n<p>For \"who owns what\" grids, combine clues step by step: each \"X is not the cat\" removes one option until only one assignment survives.</p>",
          "review": "<ul>\n<li><b>Assume \\(\\to\\) follow consequences \\(\\to\\) discard any branch that contradicts a given fact.</b></li>\n<li><b>Truth-count clues</b> (\"exactly two are true\"): test each scenario against the count.</li>\n<li><b>Chained \"if-then\"</b>: link them; a forced double-result is a contradiction.</li>\n<li>The certain answer is the one scenario with no contradiction.</li>\n</ul>"
        },
        {
          "id": "6.4",
          "title": "6.4 Inductive reasoning",
          "explanation": "<p><b>Inductive reasoning</b> deals with evidence that makes a claim <b>more or less likely</b> (not certain). Questions ask: does a new fact strengthen, weaken, prove, refute, or have no effect on a claim?</p>\n<h4>The decisive distinction: \"certainly/always\" claims</h4>\n<p>A claim using <b>\"certain\"</b> or <b>\"always\"</b> is a disguised conditional, so a <b>single counterexample refutes it completely</b>.</p>\n<p><b>Worked example.</b> Claim: \"If you water this plant daily, it will <i>certainly</i> grow.\" A plant watered daily that did not grow <b>refutes</b> the claim outright — because \"certainly\" cannot survive one failure.</p>\n<p>Contrast a <b>general (non-absolute)</b> claim: \"Sleeping 8 hours improves scores.\" One top scorer who slept 5 hours only makes it <b>less likely</b>, not refuted.</p>\n<h4>Strengthening vs weakening</h4>\n<p>Corroborating cases make a claim <b>more likely</b> (e.g. yields rose on 200 farms using fertiliser X). But an <b>alternative explanation weakens</b> it: \"our menu boosted customers\" is undermined if the only rival café closed that same week, or if the same effect appeared where the supposed cause was absent.</p>\n<p>Key question to ask each time: <i>could the new fact be explained without the claim being true?</i> If yes, it weakens; if it directly contradicts an absolute claim, it refutes.</p>",
          "review": "<ul>\n<li><b>\"Certain/always\" claim:</b> one counterexample <b>refutes</b> it.</li>\n<li><b>General claim:</b> a counterexample only makes it <b>less likely</b>.</li>\n<li><b>Corroborating evidence</b> strengthens; an <b>alternative cause</b> weakens.</li>\n<li><b>Test:</b> can the new fact be explained without the claim being true?</li>\n</ul>"
        },
        {
          "id": "6.5",
          "title": "6.5 Consistency and inconsistency",
          "explanation": "<p>Two statements are <b>inconsistent</b> if they <b>cannot both be true</b> — at least one must be false. A set is <b>consistent</b> if some scenario makes them all true together.</p>\n<h4>Spotting inconsistency</h4>\n<p>Look for a universal claim (\"all ...\") colliding with a specific exception.<br>\n<b>Worked example.</b> \"All birds can fly\" and \"Penguins are birds that cannot fly\" are <b>inconsistent</b> — both cannot hold.</p>\n<p><b>Worked example (ordering).</b> \"A is taller than B; B is taller than C; C is taller than A\" is inconsistent — \"taller than\" cannot form a loop.</p>\n<h4>Conditionals and consistency</h4>\n<p>A rule \"if \\(x\\) then \\(y\\)\" is <b>contradicted</b> by a case where \\(x\\) is true but \\(y\\) is false.<br>\n<b>Worked example.</b> \"If it snows, school closes\" together with \"it snowed\" and \"school stayed open\" is <b>inconsistent</b> — that is precisely the \\(x\\)-true, \\(y\\)-false case the rule forbids.</p>\n<p><b>Careful: a rule constrains only its \"if\" case.</b> \"If it rains, the match is cancelled\" says nothing about no-rain days — so \"it did not rain and the match was cancelled\" is perfectly <b>consistent</b> (the match may be cancelled for other reasons). Likewise \"finishers get a certificate\" does <b>not</b> mean only finishers do, so a non-finisher with a certificate is consistent.</p>",
          "review": "<ul>\n<li><b>Inconsistent</b> = cannot all be true at once (at least one false).</li>\n<li><b>Universal vs exception:</b> \"all X are Y\" clashes with \"this X is not Y\".</li>\n<li><b>Ordering loops</b> (A>B>C>A) are inconsistent.</li>\n<li><b>Conditional clash:</b> only \\(x\\)-true-with-\\(y\\)-false breaks \"if \\(x\\) then \\(y\\)\"; the rule says nothing about the not-\\(x\\) case.</li>\n</ul>"
        }
      ]
    }
  ],
  "practiceQuestions": [
    {
      "unit": 1,
      "name": "Probability & Statistics",
      "skills": [
        {
          "id": "1.1",
          "title": "1.1 Sample space and events",
          "questions": [
            {
              "q": "Two fair dice are rolled. Find the probability that the sum is 7.",
              "options": [
                "1/12",
                "1/6",
                "5/36",
                "7/36"
              ],
              "answer": 1,
              "solution": "6 favourable pairs out of 36 = 1/6."
            },
            {
              "q": "A fair coin is flipped 3 times. Find the probability of at least one head.",
              "options": [
                "1/2",
                "3/8",
                "7/8",
                "1/8"
              ],
              "answer": 2,
              "solution": "1 - P(no head) = 1 - 1/8 = 7/8."
            },
            {
              "q": "A bag has 3 red, 4 blue and 5 green balls. One is drawn. Find P(not green).",
              "options": [
                "5/12",
                "1/2",
                "3/4",
                "7/12"
              ],
              "answer": 3,
              "solution": "7 non-green of 12 = 7/12."
            },
            {
              "q": "Two fair dice are rolled. Find the probability both show the same number.",
              "options": [
                "1/6",
                "1/12",
                "1/36",
                "1/3"
              ],
              "answer": 0,
              "solution": "6 doubles of 36 = 1/6."
            },
            {
              "q": "An integer from 1 to 20 is chosen at random. Find P(multiple of 3).",
              "options": [
                "1/3",
                "7/20",
                "3/10",
                "1/4"
              ],
              "answer": 2,
              "solution": "{3,6,9,12,15,18}: 6/20 = 3/10."
            }
          ]
        },
        {
          "id": "1.2",
          "title": "1.2 Probabilities (combined events, diagrams)",
          "questions": [
            {
              "q": "P(A) = 0.4 and P(B) = 0.5, with A and B independent. Find P(A and B).",
              "options": [
                "0.9",
                "0.1",
                "0.2",
                "0.45"
              ],
              "answer": 2,
              "solution": "0.4 x 0.5 = 0.2."
            },
            {
              "q": "A bag has 5 red and 3 blue balls. Two are drawn without replacement. Find P(both red).",
              "options": [
                "25/64",
                "5/14",
                "5/16",
                "3/14"
              ],
              "answer": 1,
              "solution": "(5/8)(4/7) = 20/56 = 5/14."
            },
            {
              "q": "Of 30 students, 18 like maths, 15 like physics, 8 like both. Find P(a random student likes neither).",
              "options": [
                "1/6",
                "1/5",
                "1/3",
                "1/10"
              ],
              "answer": 0,
              "solution": "18+15-8 = 25 like at least one; 5/30 = 1/6."
            },
            {
              "q": "A coin is flipped and a die is rolled. Find P(head and a six).",
              "options": [
                "1/6",
                "1/8",
                "2/3",
                "1/12"
              ],
              "answer": 3,
              "solution": "(1/2)(1/6) = 1/12."
            },
            {
              "q": "P(A) = 0.3, P(B) = 0.4, P(A or B) = 0.5. Find P(A and B).",
              "options": [
                "0.1",
                "0.2",
                "0.7",
                "0.12"
              ],
              "answer": 1,
              "solution": "0.3 + 0.4 - 0.5 = 0.2."
            }
          ]
        },
        {
          "id": "1.3",
          "title": "1.3 Binomial probabilities",
          "questions": [
            {
              "q": "A fair coin is flipped 4 times. Find P(exactly 2 heads).",
              "options": [
                "1/4",
                "1/2",
                "3/8",
                "1/16"
              ],
              "answer": 2,
              "solution": "C(4,2)/\\(2^{4}\\) = 6/16 = 3/8."
            },
            {
              "q": "A fair die is rolled 3 times. Find P(exactly one six).",
              "options": [
                "25/72",
                "1/2",
                "5/72",
                "125/216"
              ],
              "answer": 0,
              "solution": "3(1/6)(5/6\\()^{2}\\) = 75/216 = 25/72."
            },
            {
              "q": "A player scores with probability 1/3 on each of 3 shots. Find P(exactly 2 scores).",
              "options": [
                "1/9",
                "2/9",
                "1/3",
                "4/27"
              ],
              "answer": 1,
              "solution": "C(3,2)(1/3\\()^{2}\\)(2/3) = 6/27 = 2/9."
            },
            {
              "q": "A fair coin is flipped 5 times. Find P(exactly 4 heads).",
              "options": [
                "5/32",
                "1/8",
                "1/4",
                "5/16"
              ],
              "answer": 0,
              "solution": "C(5,4)/\\(2^{5}\\) = 5/32."
            },
            {
              "q": "An archer hits with probability 0.8 per shot. Find P(all 3 of 3 shots hit).",
              "options": [
                "0.8",
                "0.64",
                "0.512",
                "0.24"
              ],
              "answer": 2,
              "solution": "0.\\(8^{3}\\) = 0.512."
            }
          ]
        },
        {
          "id": "1.4",
          "title": "1.4 Conditional probability and independence",
          "questions": [
            {
              "q": "P(A) = 0.5, P(B) = 0.3, P(A and B) = 0.15. The events are:",
              "options": [
                "independent, since P(A)P(B) = P(A and B)",
                "not independent",
                "cannot be determined",
                "mutually exclusive"
              ],
              "answer": 0,
              "solution": "0.5 x 0.3 = 0.15, so independent."
            },
            {
              "q": "Two dice are rolled and the sum is 8. Find P(at least one die shows 6).",
              "options": [
                "1/3",
                "2/5",
                "1/6",
                "1/2"
              ],
              "answer": 1,
              "solution": "Sum 8: (2,6)(3,5)(4,4)(5,3)(6,2); with a six: 2 of 5."
            },
            {
              "q": "P(A and B) = 0.2 and P(A) = 0.5. Find P(B | A).",
              "options": [
                "0.1",
                "0.3",
                "0.4",
                "0.7"
              ],
              "answer": 2,
              "solution": "0.2 / 0.5 = 0.4."
            },
            {
              "q": "A bag has 4 red and 6 blue balls. The first ball drawn is red and kept out. Find P(second is red).",
              "options": [
                "4/10",
                "1/3",
                "3/10",
                "4/9"
              ],
              "answer": 1,
              "solution": "3 red left of 9 = 1/3."
            },
            {
              "q": "A card is a face card (J, Q, K). Find P(it is a king).",
              "options": [
                "1/13",
                "1/4",
                "1/3",
                "3/13"
              ],
              "answer": 2,
              "solution": "4 kings of 12 face cards = 1/3."
            }
          ]
        },
        {
          "id": "1.5",
          "title": "1.5 Central tendency and dispersion",
          "questions": [
            {
              "q": "Find the mean of 2, 4, 4, 5, 7, 8.",
              "options": [
                "4.5",
                "5",
                "5.5",
                "6"
              ],
              "answer": 1,
              "solution": "30/6 = 5."
            },
            {
              "q": "Find the median of 3, 5, 7, 8, 12, 13, 14, 18, 21.",
              "options": [
                "8",
                "10",
                "12",
                "13"
              ],
              "answer": 2,
              "solution": "Middle (5th) value = 12."
            },
            {
              "q": "Find the population variance of 1, 2, 3, 4, 5.",
              "options": [
                "1",
                "2",
                "2.5",
                "\\(\\sqrt{2}\\)"
              ],
              "answer": 1,
              "solution": "Mean 3; squared deviations 4+1+0+1+4 = 10; 10/5 = 2."
            },
            {
              "q": "Find the mode of 2, 3, 3, 5, 7, 7, 7, 9.",
              "options": [
                "3",
                "5",
                "7",
                "9"
              ],
              "answer": 2,
              "solution": "7 appears most (3 times)."
            },
            {
              "q": "Find the interquartile range of 1, 3, 5, 7, 9, 11, 13, 15.",
              "options": [
                "14",
                "6",
                "8",
                "12"
              ],
              "answer": 2,
              "solution": "Q1 = 4, Q3 = 12, IQR = 8."
            }
          ]
        },
        {
          "id": "1.6",
          "title": "1.6 Interpreting data from tables and charts",
          "questions": [
            {
              "q": "A bar chart shows sales: Mon 20, Tue 35, Wed 15, Thu 30. What percentage of total sales happened on Tuesday?",
              "options": [
                "30%",
                "35%",
                "20%",
                "25%"
              ],
              "answer": 1,
              "solution": "35 of 100 total = 35%."
            },
            {
              "q": "A pie chart sector has a central angle of 90°. What fraction of the whole does it represent?",
              "options": [
                "1/3",
                "1/2",
                "1/4",
                "1/8"
              ],
              "answer": 2,
              "solution": "90/360 = 1/4."
            },
            {
              "q": "A frequency table: value 1 (freq 2), value 2 (freq 5), value 3 (freq 3). Find the mean.",
              "options": [
                "2",
                "2.1",
                "2.5",
                "1.9"
              ],
              "answer": 1,
              "solution": "(2+10+9)/10 = 2.1."
            },
            {
              "q": "A line graph shows temperature rising steadily from 12° at 06:00 to 24° at 14:00. Find the mean rate of increase per hour.",
              "options": [
                "1.5°",
                "2°",
                "1 degree",
                "3°"
              ],
              "answer": 0,
              "solution": "12° over 8 hours = 1.5."
            },
            {
              "q": "A pie chart of 250 people shows 40% chose option A. How many people is that?",
              "options": [
                "90",
                "110",
                "100",
                "40"
              ],
              "answer": 2,
              "solution": "0.4 x 250 = 100."
            }
          ]
        },
        {
          "id": "1.7",
          "title": "1.7 Permutations",
          "questions": [
            {
              "q": "How many arrangements are there of the letters of BANANA?",
              "options": [
                "720",
                "120",
                "60",
                "36"
              ],
              "answer": 2,
              "solution": "6!/(3!2!) = 60."
            },
            {
              "q": "In how many ways can 5 people stand in a row if 2 particular people must stand together?",
              "options": [
                "24",
                "48",
                "120",
                "36"
              ],
              "answer": 1,
              "solution": "Treat pair as one: 4! x 2! = 48."
            },
            {
              "q": "How many arrangements are there of the letters of LEVEL?",
              "options": [
                "120",
                "60",
                "30",
                "20"
              ],
              "answer": 2,
              "solution": "5!/(2!2!) = 30."
            },
            {
              "q": "How many 3-digit numbers can be formed from digits 1-5 with no repetition?",
              "options": [
                "125",
                "60",
                "100",
                "25"
              ],
              "answer": 1,
              "solution": "5 x 4 x 3 = 60."
            },
            {
              "q": "How many arrangements of APPLE have both vowels together?",
              "options": [
                "12",
                "48",
                "36",
                "24"
              ],
              "answer": 3,
              "solution": "Block AE: 4!/2! = 12, times 2 = 24."
            }
          ]
        },
        {
          "id": "1.8",
          "title": "1.8 Combinations",
          "questions": [
            {
              "q": "Evaluate C(8,3), the number of ways to choose 3 from 8.",
              "options": [
                "56",
                "336",
                "24",
                "28"
              ],
              "answer": 0,
              "solution": "8x7x6/6 = 56."
            },
            {
              "q": "Choose 2 men from 5 and 2 women from 4. How many committees?",
              "options": [
                "30",
                "60",
                "90",
                "120"
              ],
              "answer": 1,
              "solution": "C(5,2) x C(4,2) = 10 x 6 = 60."
            },
            {
              "q": "Each pair of 10 people shakes hands once. How many handshakes?",
              "options": [
                "90",
                "50",
                "45",
                "100"
              ],
              "answer": 2,
              "solution": "C(10,2) = 45."
            },
            {
              "q": "In how many ways can 4 books be chosen from 6?",
              "options": [
                "30",
                "360",
                "24",
                "15"
              ],
              "answer": 3,
              "solution": "C(6,4) = C(6,2) = 15."
            },
            {
              "q": "A team of 5 is chosen from 7 boys and 3 girls with at least 2 girls. How many teams?",
              "options": [
                "105",
                "126",
                "21",
                "147"
              ],
              "answer": 1,
              "solution": "C(3,2)C(7,3)+C(3,3)C(7,2) = 105+21 = 126."
            }
          ]
        }
      ]
    },
    {
      "unit": 2,
      "name": "Polynomials",
      "skills": [
        {
          "id": "2.1",
          "title": "2.1 Expanding, factorising, simplifying",
          "questions": [
            {
              "q": "Expand (x + 3)(x - 5).",
              "options": [
                "\\(x^{2}\\) - 2x - 15",
                "\\(x^{2}\\) + 2x - 15",
                "\\(x^{2}\\) - 2x + 15",
                "\\(x^{2}\\) - 8x - 15"
              ],
              "answer": 0,
              "solution": "\\(x^{2}\\) -5x +3x -15."
            },
            {
              "q": "Factorise \\(x^{2}\\) - 9x + 20.",
              "options": [
                "(x - 4)(x - 5)",
                "(x + 4)(x + 5)",
                "(x - 2)(x - 10)",
                "(x - 1)(x - 20)"
              ],
              "answer": 0,
              "solution": "-4 and -5 sum to -9, multiply to 20."
            },
            {
              "q": "Expand (2x - 1\\()^{2}\\).",
              "options": [
                "4\\(x^{2}\\) + 1",
                "4\\(x^{2}\\) - 4x + 1",
                "4\\(x^{2}\\) - 2x + 1",
                "2\\(x^{2}\\) - 4x + 1"
              ],
              "answer": 1,
              "solution": "\\(a^{2}\\) - 2ab + \\(b^{2}\\)."
            },
            {
              "q": "Factorise \\(x^{3}\\) - 8.",
              "options": [
                "(x - 2)(\\(x^{2}\\) + 2x + 4)",
                "(x - 2)(\\(x^{2}\\) - 2x + 4)",
                "(x - 2\\()^{3}\\)",
                "(x + 2)(\\(x^{2}\\) - 2x + 4)"
              ],
              "answer": 0,
              "solution": "Difference of cubes."
            },
            {
              "q": "Simplify (\\(x^{2}\\) - 4)/(x + 2) for x not equal to -2.",
              "options": [
                "x + 2",
                "x - 4",
                "x - 2",
                "\\(x^{2}\\) - 2"
              ],
              "answer": 2,
              "solution": "(x-2)(x+2)/(x+2) = x - 2."
            }
          ]
        },
        {
          "id": "2.2",
          "title": "2.2 Roots of polynomials",
          "questions": [
            {
              "q": "Find the product of the roots of \\(x^{2}\\) - 5x + 6 = 0.",
              "options": [
                "5",
                "-5",
                "-6",
                "6"
              ],
              "answer": 3,
              "solution": "Product = c/a = 6 (roots 2 and 3)."
            },
            {
              "q": "Find the larger root of 2\\(x^{2}\\) + 3x - 2 = 0.",
              "options": [
                "2",
                "1/2",
                "-2",
                "3/2"
              ],
              "answer": 1,
              "solution": "x = (-3 +- 5)/4, so 1/2 and -2."
            },
            {
              "q": "How many real roots does \\(x^{3}\\) - 4x = 0 have?",
              "options": [
                "1",
                "2",
                "3",
                "0"
              ],
              "answer": 2,
              "solution": "x(x-2)(x+2): roots 0, 2, -2."
            },
            {
              "q": "Find the sum of the roots of \\(x^{2}\\) - 7x + 4 = 0.",
              "options": [
                "-7",
                "4",
                "7",
                "-4"
              ],
              "answer": 2,
              "solution": "Sum = -b/a = 7."
            },
            {
              "q": "3 is a root of \\(x^{2}\\) + kx + 12 = 0. Find k.",
              "options": [
                "-7",
                "7",
                "-4",
                "5"
              ],
              "answer": 0,
              "solution": "9 + 3k + 12 = 0 gives k = -7."
            }
          ]
        },
        {
          "id": "2.3",
          "title": "2.3 Inequalities",
          "questions": [
            {
              "q": "Solve 2x - 5 < 7.",
              "options": [
                "x < 1",
                "x < 6",
                "x > 6",
                "x < 12"
              ],
              "answer": 1,
              "solution": "2x < 12."
            },
            {
              "q": "Solve \\(x^{2}\\) - 4x - 5 <= 0.",
              "options": [
                "x <= -1 or x >= 5",
                "-1 <= x <= 5",
                "-5 <= x <= 1",
                "x <= 5"
              ],
              "answer": 1,
              "solution": "(x-5)(x+1) <= 0: between roots."
            },
            {
              "q": "Solve \\(x^{2}\\) > 9.",
              "options": [
                "-3 < x < 3",
                "x > 3",
                "x < -3 or x > 3",
                "x > 3 only if x positive"
              ],
              "answer": 2,
              "solution": "Outside the roots -3 and 3."
            },
            {
              "q": "x + 2 > 5 and 3x < 21 hold together. How many integers satisfy both?",
              "options": [
                "2",
                "3",
                "4",
                "infinitely many"
              ],
              "answer": 1,
              "solution": "3 < x < 7: integers 4, 5, 6."
            },
            {
              "q": "Solve -3 < 2x + 1 <= 5.",
              "options": [
                "-2 < x <= 2",
                "-1 < x <= 3",
                "-2 <= x < 2",
                "-1 <= x <= 2"
              ],
              "answer": 0,
              "solution": "Subtract 1, divide by 2."
            }
          ]
        },
        {
          "id": "2.4",
          "title": "2.4 Simultaneous equations",
          "questions": [
            {
              "q": "x + y = 10 and x - y = 4. Find xy.",
              "options": [
                "24",
                "21",
                "16",
                "40"
              ],
              "answer": 1,
              "solution": "x = 7, y = 3."
            },
            {
              "q": "2x + y = 7 and x - y = 2. Find x + 2y.",
              "options": [
                "4",
                "6",
                "5",
                "7"
              ],
              "answer": 2,
              "solution": "x = 3, y = 1."
            },
            {
              "q": "y = x + 1 and y = \\(x^{2}\\) - 1 intersect. Find the sum of the x-coordinates.",
              "options": [
                "1",
                "-1",
                "2",
                "3"
              ],
              "answer": 0,
              "solution": "\\(x^{2}\\) - x - 2 = 0: x = 2, -1."
            },
            {
              "q": "x + y = 5 and xy = 6. Find \\(x^{2}\\) + \\(y^{2}\\).",
              "options": [
                "19",
                "25",
                "13",
                "37"
              ],
              "answer": 2,
              "solution": "(x+y\\()^{2}\\) - 2xy = 25 - 12."
            },
            {
              "q": "y = 2x + 1 and y = \\(x^{2}\\) + 2x - 3 intersect. Find the sum of the y-coordinates.",
              "options": [
                "2",
                "8",
                "-2",
                "5"
              ],
              "answer": 0,
              "solution": "\\(x^{2}\\) = 4: points (2,5) and (-2,-3); 5 + (-3) = 2."
            }
          ]
        },
        {
          "id": "2.5",
          "title": "2.5 Polynomial division",
          "questions": [
            {
              "q": "Find the remainder when \\(x^{2}\\) + 5x + 7 is divided by x + 2.",
              "options": [
                "1",
                "-1",
                "3",
                "21"
              ],
              "answer": 0,
              "solution": "f(-2) = 4 - 10 + 7 = 1."
            },
            {
              "q": "Find the remainder when \\(x^{3}\\) - 2x + 4 is divided by x - 1.",
              "options": [
                "1",
                "3",
                "5",
                "7"
              ],
              "answer": 1,
              "solution": "f(1) = 1 - 2 + 4 = 3."
            },
            {
              "q": "Find the quotient when \\(x^{3}\\) - 1 is divided by x - 1.",
              "options": [
                "\\(x^{2}\\) + 1",
                "\\(x^{2}\\) - x + 1",
                "\\(x^{2}\\) + x + 1",
                "\\(x^{2}\\) - 1"
              ],
              "answer": 2,
              "solution": "Difference of cubes."
            },
            {
              "q": "Find the remainder when 2\\(x^{3}\\) + \\(x^{2}\\) - 5 is divided by x + 1.",
              "options": [
                "-6",
                "-2",
                "0",
                "4"
              ],
              "answer": 0,
              "solution": "f(-1) = -2 + 1 - 5 = -6."
            },
            {
              "q": "Find the quotient when \\(x^{3}\\) + 3\\(x^{2}\\) - x - 3 is divided by \\(x^{2}\\) - 1.",
              "options": [
                "x - 3",
                "x + 3",
                "\\(x^{2}\\) + 3",
                "x + 1"
              ],
              "answer": 1,
              "solution": "(\\(x^{2}\\)-1)(x+3) = \\(x^{3}\\)+3\\(x^{2}\\)-x-3, remainder 0."
            }
          ]
        }
      ]
    },
    {
      "unit": 3,
      "name": "Geometry",
      "skills": [
        {
          "id": "3.1",
          "title": "3.1 Triangles by sides; Pythagoras",
          "questions": [
            {
              "q": "A right triangle has legs 5 and 12. Find the hypotenuse.",
              "options": [
                "17",
                "13",
                "\\(\\sqrt{119}\\)",
                "15"
              ],
              "answer": 1,
              "solution": "25 + 144 = 169."
            },
            {
              "q": "An isosceles triangle has two sides of 7 and perimeter 25. Find the base.",
              "options": [
                "9",
                "18",
                "11",
                "12"
              ],
              "answer": 2,
              "solution": "25 - 14 = 11."
            },
            {
              "q": "Find the area of an equilateral triangle with side 6.",
              "options": [
                "18",
                "\\(9\\sqrt{3}\\)",
                "36",
                "\\(12\\sqrt{3}\\)"
              ],
              "answer": 1,
              "solution": "(\\(\\sqrt{3}\\)/ 4) x 36 = \\(9\\sqrt{3}\\)."
            },
            {
              "q": "A right triangle has hypotenuse 10 and one leg 6. Find its area.",
              "options": [
                "24",
                "30",
                "48",
                "40"
              ],
              "answer": 0,
              "solution": "Other leg 8; (1/2)(6)(8) = 24."
            },
            {
              "q": "Which triangle is right-angled?",
              "options": [
                "sides 5, 6, 7",
                "sides 9, 12, 15",
                "sides 4, 5, 6",
                "sides 7, 8, 11"
              ],
              "answer": 1,
              "solution": "81 + 144 = 225 (3-4-5 scaled)."
            }
          ]
        },
        {
          "id": "3.2",
          "title": "3.2 Trigonometry in right triangles",
          "questions": [
            {
              "q": "Find sin 30°.",
              "options": [
                "\\(\\sqrt{3}\\) over 2",
                "1/2",
                "\\(\\sqrt{2}\\) over 2",
                "1"
              ],
              "answer": 1,
              "solution": "Exact value."
            },
            {
              "q": "In a right triangle the side opposite angle T is 5 and the hypotenuse is 13. Find tan T.",
              "options": [
                "5/13",
                "12/13",
                "5/12",
                "12/5"
              ],
              "answer": 2,
              "solution": "Adjacent = 12; tan = 5/12."
            },
            {
              "q": "A triangle has sides 8 and 6 with included angle 30°. Find its area.",
              "options": [
                "24",
                "12",
                "\\(12\\sqrt{3}\\)",
                "6"
              ],
              "answer": 1,
              "solution": "(1/2)(8)(6) sin 30 = 12."
            },
            {
              "q": "Convert 135° to radians.",
              "options": [
                "\\(3 \\pi / 4\\)",
                "\\(2 \\pi / 3\\)",
                "\\(5 \\pi / 6\\)",
                "\\(3 \\pi / 5\\)"
              ],
              "answer": 0,
              "solution": "135/180 = 3/4."
            },
            {
              "q": "Evaluate tan 60 x tan 30.",
              "options": [
                "\\(\\sqrt{3}\\)",
                "3",
                "1/3",
                "1"
              ],
              "answer": 3,
              "solution": "\\(\\sqrt{3}\\) × (1/\\(\\sqrt{3}\\)) = 1."
            }
          ]
        },
        {
          "id": "3.3",
          "title": "3.3 Angle properties",
          "questions": [
            {
              "q": "Find the sum of the interior angles of a pentagon.",
              "options": [
                "360",
                "540",
                "720",
                "450"
              ],
              "answer": 1,
              "solution": "(5-2) x 180."
            },
            {
              "q": "Find each exterior angle of a regular hexagon.",
              "options": [
                "120",
                "90",
                "60",
                "45"
              ],
              "answer": 2,
              "solution": "360/6 = 60."
            },
            {
              "q": "A triangle has angles 65 and 48°. Find the third angle.",
              "options": [
                "67",
                "57",
                "77",
                "47"
              ],
              "answer": 0,
              "solution": "180 - 113 = 67."
            },
            {
              "q": "A triangle is inscribed in a circle with one side a diameter. One acute angle is 35°. Find the other acute angle.",
              "options": [
                "65",
                "55",
                "45",
                "35"
              ],
              "answer": 1,
              "solution": "Angle in semicircle is 90; 90 - 35 = 55."
            },
            {
              "q": "Two parallel lines are cut by a transversal. One co-interior (same-side interior) angle is 70°. Find the other.",
              "options": [
                "70",
                "20",
                "110",
                "290"
              ],
              "answer": 2,
              "solution": "Co-interior angles sum to 180."
            }
          ]
        },
        {
          "id": "3.4",
          "title": "3.4 Quadrilaterals",
          "questions": [
            {
              "q": "A trapezium has parallel sides 6 and 10 and height 4. Find its area.",
              "options": [
                "64",
                "32",
                "40",
                "24"
              ],
              "answer": 1,
              "solution": "(1/2)(6+10)(4) = 32."
            },
            {
              "q": "A rhombus has diagonals 6 and 8. Find its side length.",
              "options": [
                "5",
                "7",
                "10",
                "4"
              ],
              "answer": 0,
              "solution": "Half-diagonals 3 and 4 give side 5."
            },
            {
              "q": "A rectangle has perimeter 28 and length 8. Find its area.",
              "options": [
                "56",
                "40",
                "48",
                "36"
              ],
              "answer": 2,
              "solution": "Width 6; 8 x 6 = 48."
            },
            {
              "q": "A parallelogram has base 9 and height 4. Find its area.",
              "options": [
                "18",
                "36",
                "26",
                "13"
              ],
              "answer": 1,
              "solution": "9 x 4 = 36."
            },
            {
              "q": "A square has diagonal \\(6\\sqrt{2}\\). Find its area.",
              "options": [
                "72",
                "24",
                "18",
                "36"
              ],
              "answer": 3,
              "solution": "Side 6, area 36."
            }
          ]
        },
        {
          "id": "3.5",
          "title": "3.5 Circles",
          "questions": [
            {
              "q": "A circle has radius 5. Find its circumference.",
              "options": [
                "\\(25 \\pi\\)",
                "\\(10 \\pi\\)",
                "\\(5 \\pi\\)",
                "\\(100 \\pi\\)"
              ],
              "answer": 1,
              "solution": "\\(2 \\pi r.\\)"
            },
            {
              "q": "A circle has radius 6. Find the arc length for a central angle of 60°.",
              "options": [
                "\\(\\pi\\)",
                "\\(2 \\pi\\)",
                "\\(3 \\pi\\)",
                "\\(6 \\pi\\)"
              ],
              "answer": 1,
              "solution": "\\(r \\times (\\pi/3) = 2\\pi\\)."
            },
            {
              "q": "A circle has radius 4. Find the area of a 90-degree sector.",
              "options": [
                "\\(4 \\pi\\)",
                "\\(8 \\pi\\)",
                "\\(2 \\pi\\)",
                "\\(16 \\pi\\)"
              ],
              "answer": 0,
              "solution": "\\((1/4)(16 \\pi).\\)"
            },
            {
              "q": "A point is 13 from the centre of a circle of radius 5. Find the length of the tangent from the point.",
              "options": [
                "12",
                "8",
                "\\(\\sqrt{194}\\)",
                "18"
              ],
              "answer": 0,
              "solution": "Tangent perpendicular to radius: \\(\\sqrt{169-25}\\) = 12."
            },
            {
              "q": "A circle has radius 10. A chord is 6 from the centre. Find the chord length.",
              "options": [
                "8",
                "12",
                "16",
                "20"
              ],
              "answer": 2,
              "solution": "\\(2\\sqrt{100-36}\\) = 16."
            }
          ]
        },
        {
          "id": "3.6",
          "title": "3.6 Composite shapes",
          "questions": [
            {
              "q": "A square of side 4 has a semicircle (diameter 4) on top. Find the total area.",
              "options": [
                "\\(16 + 4 \\pi\\)",
                "\\(16 + 2 \\pi\\)",
                "\\(16 + 8 \\pi\\)",
                "\\(20 \\pi\\)"
              ],
              "answer": 1,
              "solution": "Square \\(16\\) plus half-circle \\(\\tfrac12\\pi(2)^2 = 2\\pi\\), total \\(16 + 2\\pi\\)."
            },
            {
              "q": "Find the perimeter of a semicircle with diameter 10 (arc plus diameter).",
              "options": [
                "\\(5 \\pi\\)",
                "\\(5 \\pi + 10\\)",
                "\\(10 \\pi + 10\\)",
                "\\(25 \\pi\\)"
              ],
              "answer": 1,
              "solution": "Curved arc \\(\\tfrac12(2\\pi\\cdot5) = 5\\pi\\) plus the straight diameter \\(10\\), so \\(5\\pi + 10\\)."
            },
            {
              "q": "An L-shape is an 8 x 6 rectangle with a 3 x 2 corner removed. Find its area.",
              "options": [
                "42",
                "48",
                "44",
                "38"
              ],
              "answer": 0,
              "solution": "48 - 6 = 42."
            },
            {
              "q": "A circle of radius 4 is inscribed in a square of side 8. Find the area inside the square but outside the circle.",
              "options": [
                "\\(64 - 8 \\pi\\)",
                "\\(16 - 4 \\pi\\)",
                "\\(64 - 16 \\pi\\)",
                "\\(32 - 16 \\pi\\)"
              ],
              "answer": 2,
              "solution": "\\(64 - \\pi(4)^{2}\\)."
            },
            {
              "q": "A 10 x 4 rectangle has a right triangle with legs 4 and 3 attached to one end. Find the total area.",
              "options": [
                "52",
                "46",
                "44",
                "50"
              ],
              "answer": 1,
              "solution": "40 + 6 = 46."
            }
          ]
        }
      ]
    },
    {
      "unit": 4,
      "name": "Functions",
      "skills": [
        {
          "id": "4.1",
          "title": "4.1 Types of function; odd and even",
          "questions": [
            {
              "q": "Which function is even?",
              "options": [
                "\\(x^{3}\\)",
                "x + 1",
                "\\(x^{4}\\) + 1",
                "\\(x^{3}\\) + x"
              ],
              "answer": 2,
              "solution": "f(-x) = f(x) holds for \\(x^{4}\\) + 1."
            },
            {
              "q": "Which function is odd?",
              "options": [
                "\\(x^{2}\\) + 1",
                "\\(x^{3}\\) - x",
                "|x|",
                "\\(x^{2}\\) - x"
              ],
              "answer": 1,
              "solution": "f(-x) = -f(x)."
            },
            {
              "q": "f is even and f(3) = 7. Find f(-3).",
              "options": [
                "-7",
                "7",
                "0",
                "cannot be determined"
              ],
              "answer": 1,
              "solution": "Even: f(-x) = f(x)."
            },
            {
              "q": "f is odd and f(2) = 5. Find f(-2).",
              "options": [
                "5",
                "0",
                "-5",
                "cannot be determined"
              ],
              "answer": 2,
              "solution": "Odd: f(-x) = -f(x)."
            },
            {
              "q": "Which function is exponential?",
              "options": [
                "\\(x^{3}\\)",
                "\\(3^{x}\\)",
                "lo\\(g_{3}\\)(x)",
                "1/x"
              ],
              "answer": 1,
              "solution": "Variable in the exponent."
            }
          ]
        },
        {
          "id": "4.2",
          "title": "4.2 Domain and range",
          "questions": [
            {
              "q": "Find the largest domain of f(x) = 1/(x - 4).",
              "options": [
                "all x except 4",
                "x > 4",
                "all x except 0",
                "all real x"
              ],
              "answer": 0,
              "solution": "Denominator nonzero."
            },
            {
              "q": "Find the largest domain of f(x) = \\(\\sqrt{x+5}\\).",
              "options": [
                "x > -5",
                "x >= -5",
                "x >= 5",
                "x <= -5"
              ],
              "answer": 1,
              "solution": "Radicand nonnegative."
            },
            {
              "q": "Find the range of f(x) = \\(x^{2}\\) + 3.",
              "options": [
                "y > 3",
                "all real y",
                "y >= 3",
                "y >= 0"
              ],
              "answer": 2,
              "solution": "Minimum value 3 at x = 0."
            },
            {
              "q": "Find the largest domain of f(x) = 1/\\(\\sqrt{9-x^{2}}\\).",
              "options": [
                "-3 <= x <= 3",
                "x < -3 or x > 3",
                "all x except 3 and -3",
                "-3 < x < 3"
              ],
              "answer": 3,
              "solution": "Need 9 - \\(x^{2}\\) > 0."
            },
            {
              "q": "Find the largest domain of f(x) = (x + 1)/(\\(x^{2}\\) - x - 6).",
              "options": [
                "all x except 3 and -2",
                "all x except -3 and 2",
                "all x except 1 and 6",
                "all x except -1"
              ],
              "answer": 0,
              "solution": "\\(x^{2}\\)-x-6 = (x-3)(x+2)."
            }
          ]
        },
        {
          "id": "4.3",
          "title": "4.3 Function arithmetic",
          "questions": [
            {
              "q": "f(x) = x + 2 and g(x) = \\(x^{2}\\). Find (f + g)(3).",
              "options": [
                "11",
                "14",
                "25",
                "12"
              ],
              "answer": 1,
              "solution": "5 + 9 = 14."
            },
            {
              "q": "f(x) = x + 1 and g(x) = 2x. Find (f x g)(2).",
              "options": [
                "6",
                "10",
                "12",
                "8"
              ],
              "answer": 2,
              "solution": "3 x 4 = 12."
            },
            {
              "q": "f(x) = \\(x^{2}\\) - 1 and g(x) = x - 1. Find (f / g)(x) for x not 1.",
              "options": [
                "x - 1",
                "x + 1",
                "\\(x^{2}\\) + 1",
                "x"
              ],
              "answer": 1,
              "solution": "Factor and cancel."
            },
            {
              "q": "f(x) = 3x and g(x) = x + 2. Find (f - g)(4).",
              "options": [
                "6",
                "8",
                "10",
                "4"
              ],
              "answer": 0,
              "solution": "12 - 6 = 6."
            },
            {
              "q": "f(x) = 2x and g(x) = x - 3. Find (f x g)(5).",
              "options": [
                "25",
                "16",
                "20",
                "30"
              ],
              "answer": 2,
              "solution": "10 x 2 = 20."
            }
          ]
        },
        {
          "id": "4.4",
          "title": "4.4 Composition of functions",
          "questions": [
            {
              "q": "f(x) = 2x + 1 and g(x) = \\(x^{2}\\). Find f(g(2)).",
              "options": [
                "25",
                "9",
                "17",
                "5"
              ],
              "answer": 1,
              "solution": "g(2) = 4; f(4) = 9."
            },
            {
              "q": "f(x) = 2x + 1 and g(x) = \\(x^{2}\\). Find g(f(2)).",
              "options": [
                "25",
                "9",
                "10",
                "36"
              ],
              "answer": 0,
              "solution": "f(2) = 5; g(5) = 25."
            },
            {
              "q": "f(x) = 2x + 1 and g(x) = \\(x^{2}\\). Find f(g(x)).",
              "options": [
                "4\\(x^{2}\\) + 4x + 1",
                "2\\(x^{2}\\) + 1",
                "(2x + 1\\()^{2}\\)",
                "2\\(x^{2}\\) + 2"
              ],
              "answer": 1,
              "solution": "2(\\(x^{2}\\)) + 1."
            },
            {
              "q": "f(x) = x + 3 and g(x) = \\(\\sqrt{x}\\). Find g(f(6)).",
              "options": [
                "9",
                "3",
                "\\(\\sqrt{6}\\) + 3",
                "6"
              ],
              "answer": 1,
              "solution": "f(6) = 9; \\(\\sqrt{9}\\) = 3."
            },
            {
              "q": "f(x) = 3x - 2 and f(g(x)) = 6x + 1. Find g(x).",
              "options": [
                "2x + 1",
                "2x - 1",
                "3x + 1",
                "6x + 3"
              ],
              "answer": 0,
              "solution": "3g - 2 = 6x + 1 gives g = 2x + 1."
            }
          ]
        },
        {
          "id": "4.5",
          "title": "4.5 Inverse functions",
          "questions": [
            {
              "q": "Find the inverse of f(x) = 3x - 6.",
              "options": [
                "(x - 6)/3",
                "(x + 6)/3",
                "3x + 6",
                "x/3 - 6"
              ],
              "answer": 1,
              "solution": "Swap and solve: x = 3y - 6."
            },
            {
              "q": "Find the inverse of f(x) = (x + 1)/2.",
              "options": [
                "2x - 1",
                "(x - 1)/2",
                "2x + 1",
                "2/(x + 1)"
              ],
              "answer": 0,
              "solution": "x = (y+1)/2 gives y = 2x - 1."
            },
            {
              "q": "f(x) = \\(x^{3}\\). Find \\(f^{-1}\\)(8).",
              "options": [
                "512",
                "2",
                "24",
                "1/8"
              ],
              "answer": 1,
              "solution": "Cube root of 8 = 2."
            },
            {
              "q": "Which function has NO inverse on the whole real line?",
              "options": [
                "2x + 1",
                "\\(x^{3}\\)",
                "\\(x^{2}\\)",
                "(x - 1)/3"
              ],
              "answer": 2,
              "solution": "\\(x^{2}\\) is not one-to-one."
            },
            {
              "q": "Find the inverse of f(x) = (2x + 3)/(x - 1).",
              "options": [
                "(x + 3)/(x - 2)",
                "(x - 3)/(x + 2)",
                "(2x - 3)/(x + 1)",
                "(x + 1)/(2x - 3)"
              ],
              "answer": 0,
              "solution": "x(y-1) = 2y+3; y = (x+3)/(x-2)."
            }
          ]
        }
      ]
    },
    {
      "unit": 5,
      "name": "Series, Powers, Roots",
      "skills": [
        {
          "id": "5.1",
          "title": "5.1 Arithmetic progression",
          "questions": [
            {
              "q": "An AP has first term 3 and common difference 4. Find the 10th term.",
              "options": [
                "43",
                "39",
                "36",
                "40"
              ],
              "answer": 1,
              "solution": "3 + 9 x 4 = 39."
            },
            {
              "q": "An AP has a = 2 and d = 3. Find the sum of the first 15 terms.",
              "options": [
                "345",
                "330",
                "360",
                "315"
              ],
              "answer": 0,
              "solution": "(15/2)(4 + 42) = 345."
            },
            {
              "q": "In an AP the 5th term is 17 and the 9th term is 33. Find the first term.",
              "options": [
                "4",
                "2",
                "1",
                "3"
              ],
              "answer": 2,
              "solution": "4d = 16, d = 4; a = 17 - 16 = 1."
            },
            {
              "q": "Find 1 + 2 + 3 + ... + 100.",
              "options": [
                "5050",
                "5000",
                "10100",
                "4950"
              ],
              "answer": 0,
              "solution": "(100)(101)/2."
            },
            {
              "q": "Which term of the AP 7, 11, 15, ... equals 99?",
              "options": [
                "23rd",
                "25th",
                "22nd",
                "24th"
              ],
              "answer": 3,
              "solution": "7 + 4(n-1) = 99: n = 24."
            }
          ]
        },
        {
          "id": "5.2",
          "title": "5.2 Geometric progression",
          "questions": [
            {
              "q": "A GP has first term 2 and ratio 3. Find the 5th term.",
              "options": [
                "162",
                "54",
                "486",
                "96"
              ],
              "answer": 0,
              "solution": "2 x \\(3^{4}\\) = 162."
            },
            {
              "q": "Find the sum of the first 6 terms of 1, 2, 4, ...",
              "options": [
                "64",
                "63",
                "31",
                "127"
              ],
              "answer": 1,
              "solution": "\\(2^{6}\\) - 1 = 63."
            },
            {
              "q": "In a GP the 3rd term is 12 and the 5th term is 48. Find the possible values of the ratio r.",
              "options": [
                "2 only",
                "2 or -2",
                "4",
                "4 or -4"
              ],
              "answer": 1,
              "solution": "\\(r^{2}\\) = 4."
            },
            {
              "q": "A GP has a = 5 and r = 2. Find the sum of the first 4 terms.",
              "options": [
                "75",
                "80",
                "40",
                "35"
              ],
              "answer": 0,
              "solution": "5(\\(2^{4}\\) - 1)/(2 - 1) = 75."
            },
            {
              "q": "Find the (positive) geometric mean of 4 and 16.",
              "options": [
                "10",
                "12",
                "8",
                "6"
              ],
              "answer": 2,
              "solution": "\\(\\sqrt{64}\\)= 8."
            }
          ]
        },
        {
          "id": "5.3",
          "title": "5.3 Recursive sequences",
          "questions": [
            {
              "q": "\\(a_{1}\\) = 2 and \\(a_{n+1}\\) = 2\\(a_{n}\\) + 1. Find \\(a_{4}\\).",
              "options": [
                "11",
                "23",
                "47",
                "15"
              ],
              "answer": 1,
              "solution": "2, 5, 11, 23."
            },
            {
              "q": "\\(a_{1}\\) = \\(a_{2}\\) = 1 and \\(a_{n}\\) = \\(a_{n-1}\\) + \\(a_{n-2}\\). Find \\(a_{6}\\).",
              "options": [
                "5",
                "13",
                "8",
                "11"
              ],
              "answer": 2,
              "solution": "1,1,2,3,5,8."
            },
            {
              "q": "\\(a_{1}\\) = 3 and \\(a_{n+1}\\) = \\(a_{n}^{2}\\) - 1. Find \\(a_{3}\\).",
              "options": [
                "8",
                "63",
                "48",
                "80"
              ],
              "answer": 1,
              "solution": "3, 8, 63."
            },
            {
              "q": "\\(a_{1}\\) = 5 and \\(a_{n+1}\\) = \\(a_{n}\\) - 3. Find \\(a_{10}\\).",
              "options": [
                "-22",
                "-25",
                "-19",
                "32"
              ],
              "answer": 0,
              "solution": "5 - 9 x 3 = -22."
            },
            {
              "q": "\\(a_{1}\\) = 2 and \\(a_{n+1}\\) = 3\\(a_{n}\\). Find an explicit formula for \\(a_{n}\\).",
              "options": [
                "3 x \\(2^{n-1}\\)",
                "2 x \\(3^{n}\\)",
                "2 x \\(3^{n-1}\\)",
                "\\(6^{n-1}\\)"
              ],
              "answer": 2,
              "solution": "GP with a = 2, r = 3."
            }
          ]
        },
        {
          "id": "5.4",
          "title": "5.4 Powers",
          "questions": [
            {
              "q": "Simplify \\(x^{5} x^{3}\\) / \\(x^{2}\\).",
              "options": [
                "\\(x^{6}\\)",
                "\\(x^{8}\\)",
                "\\(x^{4}\\)",
                "\\(x^{10}\\)"
              ],
              "answer": 0,
              "solution": "Add then subtract exponents: 5+3-2."
            },
            {
              "q": "Evaluate (\\(2^{3})^{2}\\) x \\(2^{-4}\\).",
              "options": [
                "2",
                "4",
                "8",
                "1/4"
              ],
              "answer": 1,
              "solution": "\\(2^{6-4}\\) = 4."
            },
            {
              "q": "Evaluate \\(8^{2/3}\\).",
              "options": [
                "4",
                "16/3",
                "2",
                "6"
              ],
              "answer": 0,
              "solution": "\\((\\sqrt[3]{8})^{2} = 4\\)."
            },
            {
              "q": "Simplify (\\(x^{2}y^{3})^{3}\\) / (xy\\()^{2}\\).",
              "options": [
                "\\(x^{3}y^{7}\\)",
                "\\(x^{4}y^{7}\\)",
                "\\(x^{5}y^{8}\\)",
                "\\(x^{4}y^{9}\\)"
              ],
              "answer": 1,
              "solution": "\\(x^{6-2} y^{9-2}\\)."
            },
            {
              "q": "Evaluate \\(5^{0}\\) + \\(5^{-1}\\).",
              "options": [
                "0",
                "1/5",
                "6/5",
                "5"
              ],
              "answer": 2,
              "solution": "1 + 1/5."
            }
          ]
        },
        {
          "id": "5.5",
          "title": "5.5 Roots and surds",
          "questions": [
            {
              "q": "Simplify \\(\\sqrt{48}\\).",
              "options": [
                "\\(3\\sqrt{4}\\)",
                "\\(4\\sqrt{3}\\)",
                "\\(6\\sqrt{2}\\)",
                "\\(2\\sqrt{6}\\)"
              ],
              "answer": 1,
              "solution": "\\(\\sqrt{16 \\times 3}\\)."
            },
            {
              "q": "Simplify 6 / \\(\\sqrt{3}\\).",
              "options": [
                "\\(2\\sqrt{3}\\)",
                "\\(6\\sqrt{3}\\)",
                "\\(3\\sqrt{2}\\)",
                "\\(\\sqrt{2}\\)"
              ],
              "answer": 0,
              "solution": "Multiply by \\(\\sqrt{3}\\)/ \\(\\sqrt{3}\\)."
            },
            {
              "q": "Evaluate (\\(\\sqrt{5}\\) + \\(\\sqrt{2}\\))(\\(\\sqrt{5}\\) - \\(\\sqrt{2}\\)).",
              "options": [
                "7",
                "3",
                "\\(\\sqrt{3}\\)",
                "10"
              ],
              "answer": 1,
              "solution": "5 - 2 = 3."
            },
            {
              "q": "Rationalise 1 / (\\(\\sqrt{3}\\) - \\(\\sqrt{2}\\)).",
              "options": [
                "\\(\\sqrt{3}\\) - \\(\\sqrt{2}\\)",
                "(\\(\\sqrt{3}\\) + \\(\\sqrt{2}\\))/5",
                "\\(\\sqrt{3}\\) + \\(\\sqrt{2}\\)",
                "1"
              ],
              "answer": 2,
              "solution": "Multiply by conjugate; denominator 3 - 2 = 1."
            },
            {
              "q": "Simplify \\(\\sqrt{8}\\) + \\(\\sqrt{18}\\).",
              "options": [
                "\\(5\\sqrt{2}\\)",
                "\\(\\sqrt{26}\\)",
                "\\(7\\sqrt{2}\\)",
                "\\(13\\sqrt{2}\\)"
              ],
              "answer": 0,
              "solution": "\\(2\\sqrt{2}\\)+ \\(3\\sqrt{2}\\)."
            }
          ]
        }
      ]
    },
    {
      "unit": 6,
      "name": "Logical Thinking",
      "skills": [
        {
          "id": "6.1",
          "title": "6.1 Logical connectives",
          "questions": [
            {
              "q": "'It is not true that Aziz has both a car and a bike.' Which MUST be true?",
              "options": [
                "Aziz has neither a car nor a bike",
                "Aziz has at most one of them",
                "Aziz has exactly one of them",
                "Aziz has a car but no bike"
              ],
              "answer": 1,
              "solution": "Not(A and B) only rules out having both."
            },
            {
              "q": "'A or B' (inclusive) is true, and A is false. Then:",
              "options": [
                "B is true",
                "B is false",
                "B cannot be determined",
                "both are false"
              ],
              "answer": 0,
              "solution": "At least one must hold; A fails, so B holds."
            },
            {
              "q": "'Either P or Q, but not both.' P is true. Then Q is:",
              "options": [
                "true",
                "false",
                "undetermined",
                "true and false"
              ],
              "answer": 1,
              "solution": "Exclusive or: not both."
            },
            {
              "q": "What is the negation of 'All students passed'?",
              "options": [
                "No students passed",
                "All students failed",
                "At least one student did not pass",
                "Most students failed"
              ],
              "answer": 2,
              "solution": "Negation of 'all' is 'at least one not'."
            },
            {
              "q": "'It is not the case that Jasur owns a laptop or a tablet.' Then Jasur owns:",
              "options": [
                "both devices",
                "exactly one device",
                "neither device",
                "a laptop only"
              ],
              "answer": 2,
              "solution": "Not(A or B) means not A and not B."
            }
          ]
        },
        {
          "id": "6.2",
          "title": "6.2 Conditional statements",
          "questions": [
            {
              "q": "'If it rains, the ground gets wet.' The ground is dry. What follows?",
              "options": [
                "It rained",
                "It did not rain",
                "Cannot be determined",
                "The ground is wet"
              ],
              "answer": 1,
              "solution": "y false forces x false (valid deduction)."
            },
            {
              "q": "'If it rains, the ground gets wet.' The ground is wet. What follows?",
              "options": [
                "It rained",
                "It did not rain",
                "Whether it rained cannot be determined",
                "The statement is false"
              ],
              "answer": 2,
              "solution": "y true tells us nothing about x (trap)."
            },
            {
              "q": "'If x then y' is true and x is false. What can be deduced about y?",
              "options": [
                "y is false",
                "y is true",
                "nothing can be deduced about y",
                "y is false only sometimes"
              ],
              "answer": 2,
              "solution": "Denying x gives no information (trap)."
            },
            {
              "q": "'If Amir studies, he passes.' Amir passed. What follows?",
              "options": [
                "He studied",
                "He did not study",
                "Whether he studied cannot be determined",
                "He failed"
              ],
              "answer": 2,
              "solution": "Affirming y is invalid (trap)."
            },
            {
              "q": "'If the alarm rings, Sara wakes up.' The alarm rang. What follows?",
              "options": [
                "Sara woke up",
                "Sara stayed asleep",
                "Cannot be determined",
                "The alarm is broken"
              ],
              "answer": 0,
              "solution": "x true forces y true (valid deduction)."
            }
          ]
        },
        {
          "id": "6.3",
          "title": "6.3 Logical deductions",
          "questions": [
            {
              "q": "Exactly one of three friends owns a car. Aziz: 'I own it.' Bek: 'Aziz owns it.' Davron: 'I do not own it.' Exactly ONE statement is true. Who owns the car?",
              "options": [
                "Aziz",
                "Bek",
                "Davron",
                "Cannot be determined"
              ],
              "answer": 1,
              "solution": "If Bek owns it: Aziz false, Bek false, Davron true (one truth). Other cases give 2 or 0 truths."
            },
            {
              "q": "Runners X, Y, Z take distinct places 1st-3rd. If X did not win, then Y won. If Y is not last, then Z won. Who won?",
              "options": [
                "X",
                "Y",
                "Z",
                "Cannot be determined"
              ],
              "answer": 0,
              "solution": "Assume X lost: Y won, so Y not last, so Z won - contradiction. So X won (and Y must be last)."
            },
            {
              "q": "A says: 'B is lying.' B says: 'C is lying.' C says: 'Both A and B are lying.' Who is telling the truth?",
              "options": [
                "only A",
                "only B",
                "only C",
                "A and B"
              ],
              "answer": 1,
              "solution": "C true forces contradiction; A true forces contradiction; B true is consistent."
            },
            {
              "q": "Kamola, Laylo, Madina each own one of: cat, dog, parrot. Kamola does not own the cat. Laylo owns neither the cat nor the dog. Who owns the dog?",
              "options": [
                "Kamola",
                "Laylo",
                "Madina",
                "Cannot be determined"
              ],
              "answer": 0,
              "solution": "Laylo gets the parrot; Kamola cannot have the cat, so Kamola has the dog."
            },
            {
              "q": "'All roses are flowers. Some flowers fade quickly.' Which conclusion is certain?",
              "options": [
                "Some roses fade quickly",
                "Some flowers are roses",
                "Flowers that fade quickly are roses",
                "Roses never fade quickly"
              ],
              "answer": 1,
              "solution": "The fading flowers may not be roses; but since all roses are flowers, some flowers are roses."
            }
          ]
        },
        {
          "id": "6.4",
          "title": "6.4 Inductive reasoning",
          "questions": [
            {
              "q": "Claim: 'If you water this plant daily, it will certainly grow taller.' Nodira watered an identical plant daily for a month and it did not grow. The new information:",
              "options": [
                "has no effect on the claim",
                "makes the claim more likely",
                "shows the claim is false",
                "makes it less likely but possibly true"
              ],
              "answer": 2,
              "solution": "A certainty claim is refuted by one counterexample."
            },
            {
              "q": "Claim: 'Sleeping 8 hours improves exam scores.' New information: this year's top scorer slept only 5 hours a night. This:",
              "options": [
                "refutes the claim completely",
                "makes the claim less likely",
                "makes the claim more likely",
                "has no effect"
              ],
              "answer": 1,
              "solution": "A general (not certain) claim is weakened, not refuted, by one counterexample."
            },
            {
              "q": "Claim: 'Fertiliser X increases crop yield.' New information: in trials on 200 farms in two countries, yields rose wherever X was used. This:",
              "options": [
                "has no effect",
                "refutes the claim",
                "makes the claim more likely",
                "proves the claim with certainty"
              ],
              "answer": 2,
              "solution": "Strong corroborating evidence, but not certainty."
            },
            {
              "q": "Claim: 'The new traffic light reduced accidents at this junction.' New information: accidents fell by a similar amount at nearby junctions with no new lights. This:",
              "options": [
                "makes the claim less likely",
                "makes the claim more likely",
                "proves the claim false",
                "has no effect"
              ],
              "answer": 0,
              "solution": "Suggests a different cause for the drop."
            },
            {
              "q": "Claim: 'Our new menu attracted more customers.' New information: customer numbers rose, but the only competing cafe nearby closed that same week. This:",
              "options": [
                "makes the claim more likely",
                "has no effect",
                "proves the claim",
                "makes the claim less likely"
              ],
              "answer": 3,
              "solution": "An alternative explanation weakens the claim."
            }
          ]
        },
        {
          "id": "6.5",
          "title": "6.5 Consistency and inconsistency",
          "questions": [
            {
              "q": "Which pair of statements is inconsistent?",
              "options": [
                "'All birds can fly' and 'Penguins are birds that cannot fly'",
                "'Some birds fly' and 'Some birds cannot fly'",
                "'Most birds fly' and 'Penguins cannot fly'",
                "'Birds fly' and 'Planes fly'"
              ],
              "answer": 0,
              "solution": "Both cannot be true together."
            },
            {
              "q": "'Aziza is taller than Bonu. Bonu is taller than Charos. Charos is taller than Aziza.' These statements are:",
              "options": [
                "consistent",
                "inconsistent",
                "consistent only for equal heights",
                "impossible to judge"
              ],
              "answer": 1,
              "solution": "Taller-than cannot form a cycle."
            },
            {
              "q": "'If it snows, school closes. It snowed. School stayed open.' This set is:",
              "options": [
                "consistent",
                "possibly all true",
                "inconsistent",
                "true if the first statement holds"
              ],
              "answer": 2,
              "solution": "x true and y false contradicts the conditional."
            },
            {
              "q": "'Some students in the class like tea.' Which statement is inconsistent with it?",
              "options": [
                "Most students like tea",
                "No student in the class likes tea",
                "Some students dislike tea",
                "All students like tea"
              ],
              "answer": 1,
              "solution": "'Some do' and 'none do' cannot both hold."
            },
            {
              "q": "'If it rains, the match is cancelled.' Which situation is consistent with this rule?",
              "options": [
                "It rained and the match was played",
                "It did not rain and the match was cancelled",
                "It rained and the match was not cancelled",
                "None of these"
              ],
              "answer": 1,
              "solution": "The rule says nothing about no-rain days; cancelling anyway is allowed."
            }
          ]
        }
      ]
    }
  ],
  "hardQuestions": [
    {
      "unit": 1,
      "name": "Probability & Statistics",
      "skills": [
        {
          "id": "1.1",
          "title": "1.1 Sample space and events",
          "questions": [
            {
              "q": "Three fair dice are rolled. Find the probability that the product of the three numbers is odd.",
              "options": [
                "1/2",
                "1/8",
                "3/8",
                "1/4"
              ],
              "answer": 1,
              "solution": "Product odd needs all three odd: (1/2\\()^{3}\\) = 1/8."
            },
            {
              "q": "Two fair dice are rolled. Find the probability that the sum is at least 10.",
              "options": [
                "1/12",
                "5/36",
                "1/6",
                "1/9"
              ],
              "answer": 2,
              "solution": "Sums 10,11,12 give 3+2+1 = 6 outcomes; 6/36 = 1/6."
            },
            {
              "q": "A fair coin is flipped 5 times. Find the probability that heads and tails strictly alternate.",
              "options": [
                "1/8",
                "1/16",
                "1/32",
                "5/32"
              ],
              "answer": 1,
              "solution": "Only HTHTH and THTHT: 2/32 = 1/16."
            }
          ]
        },
        {
          "id": "1.2",
          "title": "1.2 Combined events",
          "questions": [
            {
              "q": "A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(the balls are different colours).",
              "options": [
                "8/15",
                "7/15",
                "4/15",
                "1/2"
              ],
              "answer": 0,
              "solution": "P(RB)+P(BR) = 2 x (4/10)(6/9) = 48/90 = 8/15."
            },
            {
              "q": "P(A) = 0.6, P(B) = 0.5, P(A or B) = 0.8. Find P(B but not A).",
              "options": [
                "0.3",
                "0.1",
                "0.2",
                "0.5"
              ],
              "answer": 2,
              "solution": "P(A and B) = 0.3; P(B only) = 0.5 - 0.3 = 0.2."
            },
            {
              "q": "A box has 3 defective and 7 working items. Three are drawn without replacement. Find P(exactly one defective).",
              "options": [
                "7/24",
                "21/40",
                "63/100",
                "1/3"
              ],
              "answer": 1,
              "solution": "C(3,1)C(7,2)/C(10,3) = 63/120 = 21/40."
            }
          ]
        },
        {
          "id": "1.3",
          "title": "1.3 Binomial probabilities",
          "questions": [
            {
              "q": "A fair die is rolled 4 times. Find the probability of at least one six.",
              "options": [
                "625/1296",
                "1/2",
                "671/1296",
                "4/6"
              ],
              "answer": 2,
              "solution": "1 - (5/6\\()^{4}\\) = 1 - 625/1296 = 671/1296."
            },
            {
              "q": "A fair coin is flipped 6 times. Find the probability of MORE heads than tails.",
              "options": [
                "11/32",
                "1/2",
                "21/64",
                "15/64"
              ],
              "answer": 0,
              "solution": "P(4)+P(5)+P(6) heads = (15+6+1)/64 = 22/64 = 11/32."
            },
            {
              "q": "Each trial succeeds with probability 1/4. In 3 trials, find P(at least 2 successes).",
              "options": [
                "9/64",
                "1/8",
                "10/27",
                "5/32"
              ],
              "answer": 3,
              "solution": "C(3,2)(1/4\\()^{2}\\)(3/4) + (1/4\\()^{3}\\) = 9/64 + 1/64 = 5/32."
            }
          ]
        },
        {
          "id": "1.4",
          "title": "1.4 Conditional probability and independence",
          "questions": [
            {
              "q": "Two fair coins are flipped. Given that at least one shows heads, find P(both show heads).",
              "options": [
                "1/2",
                "1/3",
                "1/4",
                "2/3"
              ],
              "answer": 1,
              "solution": "(1/4) / (3/4) = 1/3. The HH/HT/TH cases are equally likely."
            },
            {
              "q": "Machine X makes 60% of items with 2% defect rate; machine Y makes 40% with 5% defect rate. An item is found defective. Find P(it came from Y).",
              "options": [
                "3/8",
                "1/2",
                "5/8",
                "2/5"
              ],
              "answer": 2,
              "solution": "P(def) = 0.012 + 0.020 = 0.032; 0.020/0.032 = 5/8."
            },
            {
              "q": "Two dice: A = 'first die is even', B = 'sum is 7'. These events are:",
              "options": [
                "independent",
                "not independent",
                "mutually exclusive",
                "impossible together"
              ],
              "answer": 0,
              "solution": "P(A and B) = 3/36 = 1/12 = (1/2)(1/6) = P(A)P(B)."
            }
          ]
        },
        {
          "id": "1.5",
          "title": "1.5 Central tendency and dispersion",
          "questions": [
            {
              "q": "The mean of five numbers is 12. When a sixth number is added the mean becomes 14. Find the sixth number.",
              "options": [
                "16",
                "22",
                "26",
                "24"
              ],
              "answer": 3,
              "solution": "New sum 84, old sum 60; difference 24."
            },
            {
              "q": "The data 2, 4, x, 8, 10 has mean 6. Find the population standard deviation.",
              "options": [
                "\\(2\\sqrt{2}\\)",
                "8",
                "4",
                "\\(\\sqrt{10}\\)"
              ],
              "answer": 0,
              "solution": "x = 6; squared deviations 16+4+0+4+16 = 40; variance 8; SD = \\(2\\sqrt{2}\\)."
            },
            {
              "q": "Seven numbers have median 15. Every number is doubled and then 3 is added. Find the new median.",
              "options": [
                "30",
                "33",
                "18",
                "15"
              ],
              "answer": 1,
              "solution": "Order is preserved: new median = 2(15) + 3 = 33."
            }
          ]
        },
        {
          "id": "1.6",
          "title": "1.6 Interpreting data",
          "questions": [
            {
              "q": "A pie chart of a $2000 budget shows Rent 144°, Food 90°, Transport 54°, Savings the rest. Find the Savings amount.",
              "options": [
                "$500",
                "$400",
                "$300",
                "$720"
              ],
              "answer": 1,
              "solution": "Rest = 72° = 1/5 of 360; (1/5)(2000) = 400."
            },
            {
              "q": "A frequency table has scores 1, 2, 3, 4 with frequencies 3, x, 5, 2. The mean is 2.5. Find x.",
              "options": [
                "2",
                "3",
                "4",
                "5"
              ],
              "answer": 0,
              "solution": "(26 + 2x)/(10 + x) = 2.5 gives x = 2."
            },
            {
              "q": "A chart shows profit doubling every year from 2021 to 2024 (three doublings). The 2024 profit is $96k. Find the 2021 profit.",
              "options": [
                "$24k",
                "$32k",
                "$12k",
                "$48k"
              ],
              "answer": 2,
              "solution": "96 / \\(2^{3}\\) = 12."
            }
          ]
        },
        {
          "id": "1.7",
          "title": "1.7 Permutations",
          "questions": [
            {
              "q": "How many distinct arrangements are there of the letters of MATHEMATICS?",
              "options": [
                "4989600",
                "39916800",
                "9979200",
                "2494800"
              ],
              "answer": 0,
              "solution": "11 letters with M, A, T doubled: 11!/(2!2!2!) = 4,989,600."
            },
            {
              "q": "How many arrangements of APPLE have the two P's NOT next to each other?",
              "options": [
                "24",
                "48",
                "36",
                "30"
              ],
              "answer": 2,
              "solution": "Total 5!/2! = 60; PP together 4! = 24; 60 - 24 = 36."
            },
            {
              "q": "In how many ways can 3 boys and 3 girls sit in a row so that boys and girls alternate?",
              "options": [
                "36",
                "72",
                "144",
                "720"
              ],
              "answer": 1,
              "solution": "2 patterns x 3! x 3! = 72."
            }
          ]
        },
        {
          "id": "1.8",
          "title": "1.8 Combinations",
          "questions": [
            {
              "q": "From 6 men and 5 women, a committee of 4 must contain at least 3 women. How many committees are possible?",
              "options": [
                "60",
                "75",
                "65",
                "80"
              ],
              "answer": 2,
              "solution": "C(5,3)C(6,1) + C(5,4) = 60 + 5 = 65."
            },
            {
              "q": "How many diagonals does a 12-sided polygon have?",
              "options": [
                "54",
                "66",
                "60",
                "48"
              ],
              "answer": 0,
              "solution": "C(12,2) - 12 = 66 - 12 = 54."
            },
            {
              "q": "In how many ways can 8 people be split into two unlabelled teams of 4?",
              "options": [
                "70",
                "40",
                "28",
                "35"
              ],
              "answer": 3,
              "solution": "C(8,4)/2 = 70/2 = 35 (teams are not labelled)."
            }
          ]
        }
      ]
    },
    {
      "unit": 2,
      "name": "Polynomials",
      "skills": [
        {
          "id": "2.1",
          "title": "2.1 Expanding, factorising, simplifying",
          "questions": [
            {
              "q": "Given (x + y\\()^{2}\\) = 49 and xy = 10, find \\(x^{2}\\) + \\(y^{2}\\).",
              "options": [
                "39",
                "29",
                "59",
                "19"
              ],
              "answer": 1,
              "solution": "\\(x^{2}\\)+\\(y^{2}\\) = (x+y\\()^{2}\\) - 2xy = 49 - 20."
            },
            {
              "q": "Factorise completely: \\(x^{4}\\) - 5\\(x^{2}\\) + 4.",
              "options": [
                "(\\(x^{2}\\)-1)(\\(x^{2}\\)+4)",
                "(x-2\\()^{2}\\)(x+1\\()^{2}\\)",
                "(x-1)(x+1)(x-2)(x+2)",
                "(\\(x^{2}\\)+1)(\\(x^{2}\\)-4)"
              ],
              "answer": 2,
              "solution": "(\\(x^{2}\\)-1)(\\(x^{2}\\)-4), then each is a difference of squares."
            },
            {
              "q": "Simplify (\\(x^{3}\\) - 27)/(x - 3) for x not equal to 3.",
              "options": [
                "\\(x^{2}\\)+3x+9",
                "\\(x^{2}\\)-3x+9",
                "\\(x^{2}\\)+9",
                "\\(x^{2}\\)+6x+9"
              ],
              "answer": 0,
              "solution": "Difference of cubes: \\(a^{3}\\)-\\(b^{3}\\) = (a-b)(\\(a^{2}\\)+ab+\\(b^{2}\\))."
            }
          ]
        },
        {
          "id": "2.2",
          "title": "2.2 Roots of polynomials",
          "questions": [
            {
              "q": "The roots of \\(x^{2}\\) - 6x + k = 0 differ by 2. Find k.",
              "options": [
                "9",
                "5",
                "12",
                "8"
              ],
              "answer": 3,
              "solution": "Roots sum to 6 and differ by 2: 4 and 2; k = product = 8."
            },
            {
              "q": "a and b are the roots of \\(x^{2}\\) + 3x - 5 = 0. Find \\(a^{2}\\) + \\(b^{2}\\).",
              "options": [
                "19",
                "-1",
                "14",
                "29"
              ],
              "answer": 0,
              "solution": "(a+b\\()^{2}\\) - 2ab = 9 - 2(-5) = 19."
            },
            {
              "q": "Find the largest root of \\(x^{3}\\) - 6\\(x^{2}\\) + 11x - 6 = 0.",
              "options": [
                "1",
                "2",
                "3",
                "6"
              ],
              "answer": 2,
              "solution": "Factors as (x-1)(x-2)(x-3)."
            }
          ]
        },
        {
          "id": "2.3",
          "title": "2.3 Inequalities",
          "questions": [
            {
              "q": "Find all k such that \\(x^{2}\\) + kx + 9 > 0 for ALL real x.",
              "options": [
                "-6 < k < 6",
                "k < 6",
                "k > 6 or k < -6",
                "-3 < k < 3"
              ],
              "answer": 0,
              "solution": "Need discriminant < 0: \\(k^{2}\\) < 36."
            },
            {
              "q": "Solve simultaneously: \\(x^{2}\\) <= 16 and 2x + 1 > 3.",
              "options": [
                "1 <= x <= 4",
                "1 < x <= 4",
                "-4 <= x < 1",
                "x > 1"
              ],
              "answer": 1,
              "solution": "-4 <= x <= 4 intersected with x > 1."
            },
            {
              "q": "How many integers satisfy \\(x^{2}\\) - 7x + 10 < 0?",
              "options": [
                "2",
                "3",
                "4",
                "0"
              ],
              "answer": 0,
              "solution": "(x-2)(x-5) < 0 gives 2 < x < 5: integers 3 and 4."
            }
          ]
        },
        {
          "id": "2.4",
          "title": "2.4 Simultaneous equations",
          "questions": [
            {
              "q": "The line y = x + 3 meets the curve y = \\(x^{2}\\) + 5x + 6. Find the product of the x-coordinates of the intersection points.",
              "options": [
                "-3",
                "4",
                "3",
                "-4"
              ],
              "answer": 2,
              "solution": "\\(x^{2}\\)+4x+3 = 0: roots -1 and -3; product 3."
            },
            {
              "q": "The system y = 2x + c and y = \\(x^{2}\\) has exactly ONE solution. Find c.",
              "options": [
                "1",
                "-1",
                "0",
                "2"
              ],
              "answer": 1,
              "solution": "\\(x^{2}\\)-2x-c = 0 needs discriminant 0: 4 + 4c = 0."
            },
            {
              "q": "x + y = 7 and \\(x^{2}\\) + \\(y^{2}\\) = 29. Find xy.",
              "options": [
                "20",
                "9",
                "12",
                "10"
              ],
              "answer": 3,
              "solution": "(x+y\\()^{2}\\) - (\\(x^{2}\\)+\\(y^{2}\\)) = 2xy: 49 - 29 = 20, so xy = 10."
            }
          ]
        },
        {
          "id": "2.5",
          "title": "2.5 Polynomial division",
          "questions": [
            {
              "q": "When \\(x^{3}\\) + ax + 2 is divided by x - 2 the remainder is 4. Find a.",
              "options": [
                "-3",
                "3",
                "-5",
                "1"
              ],
              "answer": 0,
              "solution": "f(2) = 8 + 2a + 2 = 4 gives a = -3."
            },
            {
              "q": "Find the remainder when \\(x^{3}\\) + 2\\(x^{2}\\) - x + 1 is divided by \\(x^{2}\\) - 1.",
              "options": [
                "x + 3",
                "3",
                "-3",
                "2x + 1"
              ],
              "answer": 1,
              "solution": "\\(x^{3}\\)+2\\(x^{2}\\)-x+1 = (\\(x^{2}\\)-1)(x+2) + 3."
            },
            {
              "q": "A polynomial p(x) leaves remainder 5 when divided by x - 1 and remainder 3 when divided by x - 2. Find the remainder when p(x) is divided by (x-1)(x-2).",
              "options": [
                "2x + 3",
                "-2x + 3",
                "-2x + 7",
                "x + 4"
              ],
              "answer": 2,
              "solution": "Remainder ax+b with a+b = 5, 2a+b = 3: a = -2, b = 7."
            }
          ]
        }
      ]
    },
    {
      "unit": 3,
      "name": "Geometry",
      "skills": [
        {
          "id": "3.1",
          "title": "3.1 Triangles and Pythagoras",
          "questions": [
            {
              "q": "A right triangle has legs 5 and 12. Find the altitude drawn to the hypotenuse.",
              "options": [
                "30/13",
                "60/13",
                "5",
                "6"
              ],
              "answer": 1,
              "solution": "Altitude = (leg x leg)/hypotenuse = 60/13."
            },
            {
              "q": "A 13 m ladder leans on a wall with its foot 5 m out. The foot slides to 12 m out. How far does the top slide DOWN?",
              "options": [
                "5 m",
                "12 m",
                "7 m",
                "8.5 m"
              ],
              "answer": 2,
              "solution": "Top height goes from 12 to 5: drop of 7."
            },
            {
              "q": "An isosceles triangle has equal sides 10 and base 12. Find its area.",
              "options": [
                "48",
                "60",
                "96",
                "40"
              ],
              "answer": 0,
              "solution": "Height = \\(\\sqrt{100-36}\\) = 8; (1/2)(12)(8) = 48."
            }
          ]
        },
        {
          "id": "3.2",
          "title": "3.2 Trigonometry",
          "questions": [
            {
              "q": "Evaluate sin 60 cos 30 + cos 60 sin 30 (all in°).",
              "options": [
                "\\(\\sqrt{3}\\)/ 2",
                "1/2",
                "1",
                "\\(\\sqrt{3}\\)"
              ],
              "answer": 2,
              "solution": "3/4 + 1/4 = 1 (it is sin 90)."
            },
            {
              "q": "A triangle has sides 5 and 8 with included angle 150°. Find its area.",
              "options": [
                "10",
                "20",
                "\\(10\\sqrt{3}\\)",
                "40"
              ],
              "answer": 0,
              "solution": "(1/2)(5)(8) sin 150 = 20 x 1/2 = 10."
            },
            {
              "q": "An arc of a circle of radius 6 has length \\(5\\pi\\). Find the central angle in degrees.",
              "options": [
                "120",
                "150",
                "135",
                "100"
              ],
              "answer": 1,
              "solution": "\\(\\theta = \\tfrac{\\text{arc}}{r} = \\tfrac{5\\pi}{6}\\) rad \\(= 150^\\circ\\)."
            }
          ]
        },
        {
          "id": "3.3",
          "title": "3.3 Angle properties",
          "questions": [
            {
              "q": "Each interior angle of a regular polygon is 156°. How many sides has the polygon?",
              "options": [
                "12",
                "18",
                "15",
                "24"
              ],
              "answer": 2,
              "solution": "Exterior angle 24; 360/24 = 15."
            },
            {
              "q": "The angles of a triangle are in ratio 2 : 3 : 4. Find the largest angle.",
              "options": [
                "80",
                "60",
                "90",
                "100"
              ],
              "answer": 0,
              "solution": "Each part 20°; largest = 80."
            },
            {
              "q": "An inscribed angle subtends the same arc as a central angle of 100°. Find the inscribed angle.",
              "options": [
                "100",
                "200",
                "80",
                "50"
              ],
              "answer": 3,
              "solution": "Inscribed angle is half the central angle."
            }
          ]
        },
        {
          "id": "3.4",
          "title": "3.4 Quadrilaterals",
          "questions": [
            {
              "q": "A rhombus has perimeter 40 and one diagonal 12. Find its area.",
              "options": [
                "96",
                "192",
                "120",
                "60"
              ],
              "answer": 0,
              "solution": "Side 10; half-diagonals 6 and 8, so diagonals 12 and 16; area = (1/2)(12)(16) = 96."
            },
            {
              "q": "A trapezium has parallel sides in ratio 2:3, height 6 and area 60. Find the LONGER parallel side.",
              "options": [
                "8",
                "12",
                "10",
                "15"
              ],
              "answer": 1,
              "solution": "(1/2)(5x)(6) = 60 gives x = 4; longer side 12."
            },
            {
              "q": "A rectangle's length increases by 20% and its width decreases by 20%. The area:",
              "options": [
                "is unchanged",
                "increases by 4%",
                "decreases by 4%",
                "decreases by 8%"
              ],
              "answer": 2,
              "solution": "1.2 x 0.8 = 0.96."
            }
          ]
        },
        {
          "id": "3.5",
          "title": "3.5 Circles",
          "questions": [
            {
              "q": "A sector of radius 6 has area \\(12\\pi\\). Find its arc length.",
              "options": [
                "\\(2 \\pi\\)",
                "\\(4 \\pi\\)",
                "\\(6 \\pi\\)",
                "\\(3 \\pi\\)"
              ],
              "answer": 1,
              "solution": "\\(\\tfrac12 r^2\\theta = 12\\pi\\) gives \\(\\theta = \\tfrac{2\\pi}{3}\\); arc \\(= r\\theta = 6\\cdot\\tfrac{2\\pi}{3} = 4\\pi\\)."
            },
            {
              "q": "Two tangents from point P touch a circle of radius 5 at A and B, with angle APB = 60°. Find PA.",
              "options": [
                "10",
                "5",
                "\\(5\\sqrt{3}\\)",
                "\\(5\\sqrt{2}\\)"
              ],
              "answer": 2,
              "solution": "OP bisects the angle, so \\(\\tan 30^\\circ = \\tfrac{5}{PA}\\), giving \\(PA = 5\\sqrt{3}\\)."
            },
            {
              "q": "A circle is inscribed in an equilateral triangle of side 6. Find its radius.",
              "options": [
                "\\(\\sqrt{3}\\)",
                "\\(2\\sqrt{3}\\)",
                "3",
                "\\(3\\sqrt{3}\\)"
              ],
              "answer": 0,
              "solution": "For an equilateral triangle, the inradius is \\(r = \\tfrac{s}{2\\sqrt3} = \\tfrac{6}{2\\sqrt3} = \\sqrt3\\)."
            }
          ]
        },
        {
          "id": "3.6",
          "title": "3.6 Composite shapes",
          "questions": [
            {
              "q": "Inside a square of side 10, a quarter-circle of radius 5 is drawn from each corner. Find the area NOT covered by the quarter-circles.",
              "options": [
                "\\(100 - 50 \\pi\\)",
                "\\(25 \\pi\\)",
                "\\(100 - 25 \\pi\\)",
                "\\(75 \\pi\\)"
              ],
              "answer": 2,
              "solution": "Four quarter-circles of radius 5 make one full circle: \\(100 - 25\\pi\\)."
            },
            {
              "q": "A running track is a 40 x 14 rectangle with a semicircular end (diameter 14) on each 14-side. Find the outside perimeter.",
              "options": [
                "\\(80 + 28 \\pi\\)",
                "\\(80 + 14 \\pi\\)",
                "\\(108 \\pi\\)",
                "\\(80 + 7 \\pi\\)"
              ],
              "answer": 1,
              "solution": "Two straights of 40 plus two semicircles = full circle of diameter 14: \\(80 + 14\\pi\\)."
            },
            {
              "q": "A circle of radius 6 contains two non-overlapping circles of radius 3. Find the area inside the big circle but outside both small ones.",
              "options": [
                "\\(18 \\pi\\)",
                "\\(9 \\pi\\)",
                "\\(27 \\pi\\)",
                "\\(12 \\pi\\)"
              ],
              "answer": 0,
              "solution": "\\(36\\pi - 2(9\\pi) = 18\\pi\\)."
            }
          ]
        }
      ]
    },
    {
      "unit": 4,
      "name": "Functions",
      "skills": [
        {
          "id": "4.1",
          "title": "4.1 Types; odd and even",
          "questions": [
            {
              "q": "f(x) = \\(x^{3}\\) + a\\(x^{2}\\) + bx + c is an odd function. Which must be true?",
              "options": [
                "b = 0",
                "a = 0 and c = 0",
                "a = b = c = 0",
                "c = 0 only"
              ],
              "answer": 1,
              "solution": "Odd functions have no even-power or constant terms."
            },
            {
              "q": "f is even and g is odd. The product h(x) = f(x)g(x) is:",
              "options": [
                "even",
                "neither",
                "odd",
                "both"
              ],
              "answer": 2,
              "solution": "h(-x) = f(x)(-g(x)) = -h(x)."
            },
            {
              "q": "g is odd, defined at 0, and g(3) = 4. Find g(-3) + g(0).",
              "options": [
                "4",
                "0",
                "-8",
                "-4"
              ],
              "answer": 3,
              "solution": "g(-3) = -4 and g(0) = 0."
            }
          ]
        },
        {
          "id": "4.2",
          "title": "4.2 Domain and range",
          "questions": [
            {
              "q": "Find the largest domain of f(x) = \\(\\sqrt{x^{2} - 5x + 6}\\).",
              "options": [
                "2 <= x <= 3",
                "x <= 2 or x >= 3",
                "x >= 3",
                "all x except 2 and 3"
              ],
              "answer": 1,
              "solution": "(x-2)(x-3) >= 0 outside the roots."
            },
            {
              "q": "Find the range of f(x) = -\\(x^{2}\\) + 4x + 1.",
              "options": [
                "y >= 5",
                "y <= 1",
                "y <= 5",
                "all real y"
              ],
              "answer": 2,
              "solution": "Vertex at x = 2: maximum value 5."
            },
            {
              "q": "Find the largest domain of f(x) = \\(\\sqrt{x-1}\\)/(x - 3).",
              "options": [
                "x >= 1",
                "x >= 1 and x not equal to 3",
                "x > 3",
                "x > 1"
              ],
              "answer": 1,
              "solution": "Need x - 1 >= 0 and denominator nonzero."
            }
          ]
        },
        {
          "id": "4.3",
          "title": "4.3 Function arithmetic",
          "questions": [
            {
              "q": "f(x) = \\(x^{2}\\) - 4 and g(x) = x + 2. (f/g)(x) = x - 2 everywhere EXCEPT at:",
              "options": [
                "x = 2",
                "x = 0",
                "x = -2",
                "x = 4"
              ],
              "answer": 2,
              "solution": "g(-2) = 0, so x = -2 is excluded from the domain."
            },
            {
              "q": "f(x) = 2x + 1. Find f(x + 1) - f(x - 1).",
              "options": [
                "2",
                "4",
                "4x",
                "0"
              ],
              "answer": 1,
              "solution": "(2x + 3) - (2x - 1) = 4."
            },
            {
              "q": "f(x) = \\(x^{2}\\) and g(x) = 2x - 3. How many real solutions does (f - g)(x) = 0 have?",
              "options": [
                "0",
                "1",
                "2",
                "3"
              ],
              "answer": 0,
              "solution": "\\(x^{2}\\) - 2x + 3 = 0 has discriminant 4 - 12 < 0."
            }
          ]
        },
        {
          "id": "4.4",
          "title": "4.4 Composition",
          "questions": [
            {
              "q": "f(x) = x + 2. Find f(f(f(1))).",
              "options": [
                "5",
                "6",
                "9",
                "7"
              ],
              "answer": 3,
              "solution": "1 -> 3 -> 5 -> 7."
            },
            {
              "q": "f(x) = 2x - 1 and g(f(x)) = 4\\(x^{2}\\) - 4x + 2. Find g(x).",
              "options": [
                "\\(x^{2}\\) + 1",
                "\\(x^{2}\\)",
                "4\\(x^{2}\\) + 1",
                "\\(x^{2}\\) - 1"
              ],
              "answer": 0,
              "solution": "4\\(x^{2}\\)-4x+2 = (2x-1\\()^{2}\\) + 1, so g(u) = \\(u^{2}\\) + 1."
            },
            {
              "q": "f(g(x)) = x for all x, and f(x) = (x - 3)/2. Find g(5).",
              "options": [
                "1",
                "13",
                "4",
                "8"
              ],
              "answer": 1,
              "solution": "g is the inverse: g(x) = 2x + 3; g(5) = 13."
            }
          ]
        },
        {
          "id": "4.5",
          "title": "4.5 Inverse functions",
          "questions": [
            {
              "q": "f(x) = \\(x^{2}\\) - 4x + 7 with domain x >= 2. Find \\(f^{-1}\\)(12).",
              "options": [
                "-1",
                "3",
                "5",
                "12"
              ],
              "answer": 2,
              "solution": "\\(x^{2}\\)-4x-5 = 0: x = 5 or -1; the domain keeps 5."
            },
            {
              "q": "f(x) = (3x - 2)/(x + 1). At which x is \\(f^{-1}\\)(x) undefined?",
              "options": [
                "3",
                "-1",
                "2/3",
                "-2"
              ],
              "answer": 0,
              "solution": "\\(f^{-1}\\)(x) = (x + 2)/(3 - x): denominator zero at x = 3."
            },
            {
              "q": "f(x) = 2x + k and \\(f^{-1}\\)(7) = 2. Find k.",
              "options": [
                "5",
                "-3",
                "11",
                "3"
              ],
              "answer": 3,
              "solution": "\\(f^{-1}\\)(7) = 2 means f(2) = 7: 4 + k = 7."
            }
          ]
        }
      ]
    },
    {
      "unit": 5,
      "name": "Series, Powers, Roots",
      "skills": [
        {
          "id": "5.1",
          "title": "5.1 Arithmetic progression",
          "questions": [
            {
              "q": "The sum of the first n terms of an AP is \\(S_{n}\\) = 2\\(n^{2}\\) + 3n. Find the 5th term.",
              "options": [
                "65",
                "21",
                "13",
                "25"
              ],
              "answer": 1,
              "solution": "\\(a_{5}\\) = \\(S_{5}\\) - \\(S_{4}\\) = 65 - 44 = 21."
            },
            {
              "q": "In an AP, \\(a_{3}\\) + \\(a_{7}\\) = 30. Find the sum of the first 9 terms.",
              "options": [
                "270",
                "150",
                "135",
                "120"
              ],
              "answer": 2,
              "solution": "\\(a_{3}\\)+\\(a_{7}\\) = 2\\(a_{5}\\), so \\(a_{5}\\) = 15; \\(S_{9}\\) = 9 \\(a_{5}\\) = 135."
            },
            {
              "q": "How many terms of the AP 5, 9, 13, ... are needed for the sum to first exceed 200?",
              "options": [
                "9",
                "11",
                "8",
                "10"
              ],
              "answer": 3,
              "solution": "\\(S_{n}\\) = n(2n + 3): \\(S_{9}\\) = 189, \\(S_{10}\\) = 230."
            }
          ]
        },
        {
          "id": "5.2",
          "title": "5.2 Geometric progression",
          "questions": [
            {
              "q": "In a GP the 2nd term is 6 and the 5th term is 48. Find the first term.",
              "options": [
                "3",
                "2",
                "6",
                "1.5"
              ],
              "answer": 0,
              "solution": "\\(r^{3}\\) = 48/6 = 8, r = 2; a = 6/2 = 3."
            },
            {
              "q": "A GP has first term 3 and the sum of its first three terms is 21. Find the positive ratio.",
              "options": [
                "3",
                "2",
                "6",
                "4"
              ],
              "answer": 1,
              "solution": "1 + r + \\(r^{2}\\) = 7: \\(r^{2}\\) + r - 6 = 0, r = 2."
            },
            {
              "q": "The numbers x, x + 3, x + 9 form a GP. Find x.",
              "options": [
                "1",
                "6",
                "3",
                "9"
              ],
              "answer": 2,
              "solution": "(x+3\\()^{2}\\) = x(x+9) gives 6x + 9 = 9x, x = 3."
            }
          ]
        },
        {
          "id": "5.3",
          "title": "5.3 Recursive sequences",
          "questions": [
            {
              "q": "\\(a_{1}\\) = 1 and \\(a_{n+1}\\) = \\(a_{n}\\) + 2n. Find \\(a_{5}\\).",
              "options": [
                "21",
                "13",
                "25",
                "31"
              ],
              "answer": 0,
              "solution": "1, 3, 7, 13, 21."
            },
            {
              "q": "\\(a_{1}\\) = 2 and \\(a_{n+1}\\) = 1/(1 - \\(a_{n}\\)). Find \\(a_{2026}\\).",
              "options": [
                "-1",
                "2",
                "1/2",
                "1"
              ],
              "answer": 1,
              "solution": "Cycle 2, -1, 1/2 of length 3; 2026 = 3(675) + 1, so \\(a_{2026}\\) = \\(a_{1}\\) = 2."
            },
            {
              "q": "\\(a_{1}\\) = 4 and \\(a_{n+1}\\) = \\(a_{n}\\)/2 + 3. Find \\(a_{4}\\).",
              "options": [
                "11/2",
                "6",
                "23/4",
                "5"
              ],
              "answer": 2,
              "solution": "4, 5, 11/2, 23/4."
            }
          ]
        },
        {
          "id": "5.4",
          "title": "5.4 Powers",
          "questions": [
            {
              "q": "If \\(2^{x}\\) = 5, find \\(2^{x+3}\\).",
              "options": [
                "15",
                "125",
                "8",
                "40"
              ],
              "answer": 3,
              "solution": "\\(2^{x+3}\\) = \\(2^{x}\\) x 8 = 40."
            },
            {
              "q": "Simplify (2\\(7^{2/3}\\) x \\(9^{1/2}\\)) / \\(3^{2}\\).",
              "options": [
                "3",
                "9",
                "1",
                "27"
              ],
              "answer": 0,
              "solution": "(9 x 3)/9 = 3."
            },
            {
              "q": "Solve \\(4^{x}\\) = \\(8^{x-1}\\).",
              "options": [
                "1",
                "2",
                "3",
                "-3"
              ],
              "answer": 2,
              "solution": "\\(2^{2x}\\) = \\(2^{3x-3}\\): 2x = 3x - 3."
            }
          ]
        },
        {
          "id": "5.5",
          "title": "5.5 Roots and surds",
          "questions": [
            {
              "q": "Evaluate (\\(\\sqrt{3}\\)+ 1\\()^{2}\\) - (\\(\\sqrt{3}\\)- 1\\()^{2}\\).",
              "options": [
                "\\(2\\sqrt{3}\\)",
                "\\(4\\sqrt{3}\\)",
                "8",
                "4"
              ],
              "answer": 1,
              "solution": "(a+b\\()^{2}\\) - (a-b\\()^{2}\\) = 4ab = \\(4\\sqrt{3}\\)."
            },
            {
              "q": "Rationalise and simplify: 2/(3 - \\(\\sqrt{7})\\).",
              "options": [
                "3 - \\(\\sqrt{7}\\)",
                "6 + \\(2\\sqrt{7}\\)",
                "3 + \\(\\sqrt{7}\\)",
                "(3 + \\(\\sqrt{7})\\)/2"
              ],
              "answer": 2,
              "solution": "Multiply by conjugate: 2(3 + \\(\\sqrt{7})\\)/(9 - 7) = 3 + \\(\\sqrt{7}\\)."
            },
            {
              "q": "Simplify \\(\\sqrt{5 + 2\\sqrt{6}}\\).",
              "options": [
                "\\(\\sqrt{5}\\)+ \\(\\sqrt{6}\\)",
                "1 + \\(\\sqrt{6}\\)",
                "2 + \\(\\sqrt{3}\\)",
                "\\(\\sqrt{2}\\)+ \\(\\sqrt{3}\\)"
              ],
              "answer": 3,
              "solution": "(\\(\\sqrt{2}\\)+ \\(\\sqrt{3})^{2}\\) = 2 + 3 + \\(2\\sqrt{6}\\)."
            }
          ]
        }
      ]
    },
    {
      "unit": 6,
      "name": "Logical Thinking",
      "skills": [
        {
          "id": "6.1",
          "title": "6.1 Logical connectives",
          "questions": [
            {
              "q": "'Not (A or B)' is true, and 'C or A' is true. What follows?",
              "options": [
                "C is false",
                "B is true",
                "C is true and B is false",
                "cannot be determined"
              ],
              "answer": 2,
              "solution": "A and B are both false; then 'C or A' forces C true."
            },
            {
              "q": "Statement 1: 'X and Y'. Statement 2: 'X or Y' (inclusive). EXACTLY ONE of the two statements is true. What follows?",
              "options": [
                "both X and Y are true",
                "exactly one of X, Y is true",
                "both are false",
                "X is true, Y is false"
              ],
              "answer": 1,
              "solution": "If both X,Y true, both statements true; if both false, both statements false. So exactly one of X, Y holds (statement 2 true, statement 1 false)."
            },
            {
              "q": "'If neither Aziz nor Bek attends, the meeting is cancelled.' The meeting was NOT cancelled. What follows?",
              "options": [
                "both attended",
                "neither attended",
                "Aziz attended",
                "at least one of them attended"
              ],
              "answer": 3,
              "solution": "y false forces x false: 'neither attends' is false, so at least one attended."
            }
          ]
        },
        {
          "id": "6.2",
          "title": "6.2 Conditional statements",
          "questions": [
            {
              "q": "'If Malika passes maths, she passes physics. If she passes physics, she passes chemistry.' Malika did NOT pass chemistry. What follows?",
              "options": [
                "she passed neither maths nor physics",
                "she failed only chemistry",
                "she passed maths but not physics",
                "cannot be determined"
              ],
              "answer": 0,
              "solution": "Chain the contrapositives: no chemistry -> no physics -> no maths."
            },
            {
              "q": "'If it is a holiday, the shop is closed.' The shop is closed today, so the manager concludes it must be a holiday. The reasoning is:",
              "options": [
                "valid",
                "invalid - the shop could be closed for another reason",
                "valid only on weekends",
                "invalid because the rule is false"
              ],
              "answer": 1,
              "solution": "Affirming the consequent: y true tells us nothing about x."
            },
            {
              "q": "Rule: 'If the test is hard, most students fail.' Which additional fact lets you conclude with certainty that the test was NOT hard?",
              "options": [
                "most students failed",
                "some students failed",
                "most students did NOT fail",
                "the test was long"
              ],
              "answer": 2,
              "solution": "Only y-false gives a valid deduction (x must be false)."
            }
          ]
        },
        {
          "id": "6.3",
          "title": "6.3 Logical deductions",
          "questions": [
            {
              "q": "A says: 'All three of us always lie.' (B and C stay silent.) What can be deduced?",
              "options": [
                "all three lie",
                "A tells the truth",
                "A lies, and at least one of B, C tells the truth",
                "nothing"
              ],
              "answer": 2,
              "solution": "If A were truthful the statement would make A a liar - contradiction. So A lies, so NOT all three lie."
            },
            {
              "q": "Five runners. B finished immediately after A; C was neither first nor last; D finished before A; E finished last. Who finished FIRST?",
              "options": [
                "A",
                "D",
                "C",
                "cannot be determined"
              ],
              "answer": 1,
              "solution": "E is 5th; the A-B pair and the constraints force D into 1st in every valid order (D A B C E or D C A B E)."
            },
            {
              "q": "Exactly TWO of these three statements are true: (1) Sanjar owns a bike. (2) Sanjar owns a car. (3) Sanjar owns a bike or a car (inclusive). What follows?",
              "options": [
                "he owns both",
                "he owns exactly one of them",
                "he owns neither",
                "he owns the bike for sure"
              ],
              "answer": 1,
              "solution": "Owning both makes all three true; owning neither makes all false. Owning exactly one makes precisely (3) and one of (1),(2) true."
            }
          ]
        },
        {
          "id": "6.4",
          "title": "6.4 Inductive reasoning",
          "questions": [
            {
              "q": "Claim: 'Vitamin Z prevents colds.' A controlled study: 1000 people took Z, 1000 did not - both groups caught colds at identical rates. The study:",
              "options": [
                "proves the claim false with certainty",
                "makes the claim less likely to be true",
                "has no effect",
                "makes it more likely"
              ],
              "answer": 1,
              "solution": "Strong disconfirming evidence, though not a logical refutation."
            },
            {
              "q": "Claim: 'Our new fertiliser doubled this year's harvest.' New info: this year had record rainfall, ideal for crops. This:",
              "options": [
                "makes the claim more likely",
                "proves the claim",
                "makes the claim less likely",
                "has no effect"
              ],
              "answer": 2,
              "solution": "A plausible alternative cause weakens the claim."
            },
            {
              "q": "Claim: 'If a student attends every lecture, they will certainly pass.' Karim attended every lecture and passed. This:",
              "options": [
                "makes the claim more likely",
                "proves the claim true",
                "refutes the claim",
                "has no effect"
              ],
              "answer": 0,
              "solution": "One confirming instance supports but does not prove a 'certainly' claim."
            }
          ]
        },
        {
          "id": "6.5",
          "title": "6.5 Consistency and inconsistency",
          "questions": [
            {
              "q": "Which set of three statements is INCONSISTENT?",
              "options": [
                "All managers attended; Zafar is a manager; Zafar did not attend",
                "Some managers attended; Zafar is a manager; Zafar did not attend",
                "All managers attended; Zafar is not a manager; Zafar attended",
                "No managers attended; Zafar is not a manager; Zafar attended"
              ],
              "answer": 0,
              "solution": "Only set A forces a contradiction."
            },
            {
              "q": "Statements: (1) 'If the bridge is open, traffic flows.' (2) 'The bridge is open.' (3) 'Traffic is not flowing.' What is the MAXIMUM number of these that can be true at once?",
              "options": [
                "3",
                "1",
                "2",
                "0"
              ],
              "answer": 2,
              "solution": "Any two are compatible; all three together contradict."
            },
            {
              "q": "'Everyone who finished the course got a certificate. Dilnoza got a certificate. Dilnoza did not finish the course.' This set is:",
              "options": [
                "inconsistent",
                "consistent - certificates may also be given to non-finishers",
                "consistent only if Dilnoza finished",
                "self-contradictory"
              ],
              "answer": 1,
              "solution": "The rule says finishers get certificates - it never says ONLY finishers do."
            }
          ]
        }
      ]
    }
  ]
};

/* ---------------- FINAL CHALLENGE — NewUU 2026 Paper C (full mock exam) ----------------
   The last test before exam day: a complete mixed paper (Mathematics 1-34, Logical
   Thinking 35-40), deliberately harder than the real exam. 40 questions, 120 minutes,
   no calculator. Rendered in the same timed unit-test style as the unit challenges.
   Answer indices are 0-based (A=0, B=1, C=2, D=3). */
COURSE_DATA.finalChallenge = {
  "title": "Final Challenge · Paper C Mock Exam",
  "titleRu": "Финальное испытание · Пробный экзамен (Paper C)",
  "subtitle": "40 questions · 120 min",
  "subtitleRu": "40 вопросов · 120 мин",
  "questions": [
    {
      "q": "A fair coin is flipped 8 times. Find the probability of getting at least 2 heads.",
      "options": ["\\(\\frac{255}{256}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{219}{256}\\)", "\\(\\frac{247}{256}\\)"],
      "answer": 3,
      "solution": "1 - P(0) - P(1) = 1 - 1/256 - 8/256 = 247/256. Trap: you must subtract BOTH the 0-head and 1-head cases."
    },
    {
      "q": "The mean of 6 numbers is 15. Two numbers, 8 and 22, are removed. Find the mean of the remaining four.",
      "options": ["13.5", "15", "14", "16"],
      "answer": 1,
      "solution": "Sum = 90; remove 30 -> 60 over 4 = 15. Trap: the removed pair averages 15 too, so the mean is unchanged."
    },
    {
      "q": "How many distinct arrangements of the letters of the word STATISTICS are there?",
      "options": ["50400", "30240", "151200", "100800"],
      "answer": 0,
      "solution": "10 letters with S x3, T x3, I x2: 10!/(3!3!2!) = 3628800/72 = 50400."
    },
    {
      "q": "Three cards are drawn without replacement from a standard deck. Find the probability all three are hearts.",
      "options": ["\\(\\frac{11}{4096}\\)", "\\(\\frac{1}{64}\\)", "\\(\\frac{13}{204}\\)", "\\(\\frac{11}{850}\\)"],
      "answer": 3,
      "solution": "(13/52)(12/51)(11/50) = 1716/132600 = 11/850. Trap: (1/4)^3 ignores 'without replacement'."
    },
    {
      "q": "A data set of 5 numbers has mean 10 and the numbers 7, 9, 11, 13 are four of them. Find the population standard deviation of the whole set.",
      "options": ["\\(2\\sqrt{2}\\)", "\\(\\sqrt{10}\\)", "\\(2\\)", "\\(4\\)"],
      "answer": 2,
      "solution": "5th number = 10; deviations -3,-1,0,1,3; squares sum 20; variance 20/5 = 4; SD = sqrt(4) = 2. Trap: variance (4) is not the SD."
    },
    {
      "q": "Two fair dice are rolled. Given that the product of the two numbers is even, find the probability that the sum is even.",
      "options": ["\\(\\frac{5}{9}\\)", "\\(\\frac{1}{3}\\)", "\\(\\frac{4}{9}\\)", "\\(\\frac{1}{2}\\)"],
      "answer": 1,
      "solution": "27 outcomes have an even product; of these, an even sum needs both even: 9 outcomes. 9/27 = 1/3."
    },
    {
      "q": "From 6 men and 4 women, a committee of 4 is chosen. Find the probability it contains at least one woman.",
      "options": ["\\(\\frac{2}{3}\\)", "\\(\\frac{13}{14}\\)", "\\(\\frac{1}{14}\\)", "\\(\\frac{11}{14}\\)"],
      "answer": 1,
      "solution": "1 - C(6,4)/C(10,4) = 1 - 15/210 = 195/210 = 13/14."
    },
    {
      "q": "Five positive integers have mean 6, median 6, and a single mode of 8. Find the smallest of the five numbers.",
      "options": ["5", "4", "2", "3"],
      "answer": 3,
      "solution": "Median 6 is the middle value; mode 8 (twice) fills the top two: {a,b,6,8,8}, sum 30 -> a+b=8 with a unique mode gives {3,5,6,8,8}. Smallest 3."
    },
    {
      "q": "Find all values of \\(k\\) for which \\(x^2 - kx + 9 > 0\\) for every real \\(x\\).",
      "options": ["\\(k > 6\\)", "\\(-3 < k < 3\\)", "\\(-6 < k < 6\\)", "\\(k < -6\\ \\text{or}\\ k > 6\\)"],
      "answer": 2,
      "solution": "Positive for all x means no real roots: discriminant < 0 -> k^2 < 36 -> -6 < k < 6. Trap: the 'outside' region is when it HAS roots."
    },
    {
      "q": "Find all values of \\(m\\) for which \\(mx^2 + 4x + 1 = 0\\) has no real solutions.",
      "options": ["\\(0 < m < 4\\)", "\\(m < 4\\ \\text{and}\\ m \\neq 0\\)", "\\(m > 4\\ \\text{or}\\ m < 0\\)", "\\(m > 4\\)"],
      "answer": 3,
      "solution": "Need discriminant < 0: 16 - 4m < 0 -> m > 4 (and m = 0 makes it linear, which has a solution). So m > 4."
    },
    {
      "q": "If \\(a\\) and \\(b\\) are the roots of \\(x^2 - 5x + 2 = 0\\), find \\(a^3 + b^3\\).",
      "options": ["110", "85", "95", "125"],
      "answer": 2,
      "solution": "a+b = 5, ab = 2. a^3 + b^3 = (a+b)^3 - 3ab(a+b) = 125 - 30 = 95."
    },
    {
      "q": "Solve the inequality \\((x-1)(x+2)(x-3) > 0\\).",
      "options": ["\\(x > 3\\) only", "\\(x < -2\\ \\text{or}\\ 1 < x < 3\\)", "\\(-2 < x < 1\\ \\text{or}\\ x > 3\\)", "\\(-2 < x < 3\\)"],
      "answer": 2,
      "solution": "Sign chart of a cubic with roots -2, 1, 3: positive on (-2, 1) and (3, infinity)."
    },
    {
      "q": "The remainder when \\(x^3 + ax^2 - 3x + 6\\) is divided by \\(x - 2\\) is 12. Find \\(a\\).",
      "options": ["\\(-1\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)"],
      "answer": 1,
      "solution": "f(2) = 8 + 4a - 6 + 6 = 12 -> 4a + 8 = 12 -> a = 1."
    },
    {
      "q": "For what value of \\(c\\) is the line \\(y = 2x + c\\) tangent to the curve \\(y = x^2 - 4x + 7\\)?",
      "options": ["\\(-1\\)", "\\(1\\)", "\\(-2\\)", "\\(2\\)"],
      "answer": 2,
      "solution": "x^2 - 4x + 7 = 2x + c -> x^2 - 6x + (7-c) = 0; tangent means discriminant 0: 36 - 4(7-c) = 0 -> c = -2."
    },
    {
      "q": "A polynomial leaves remainder 7 when divided by \\((x-2)\\) and remainder 1 when divided by \\((x+1)\\). Find the remainder when divided by \\((x-2)(x+1)\\).",
      "options": ["\\(-2x + 11\\)", "\\(x + 5\\)", "\\(2x + 3\\)", "\\(2x - 3\\)"],
      "answer": 2,
      "solution": "Remainder ax+b: 2a+b = 7, -a+b = 1 -> a = 2, b = 3 -> 2x + 3."
    },
    {
      "q": "A right triangle has legs 5 and 12. A square is inscribed with one corner at the right angle and sides along the legs. Find the side of the square.",
      "options": ["\\(\\frac{60}{17}\\)", "\\(\\frac{17}{5}\\)", "\\(\\frac{30}{7}\\)", "\\(\\frac{5}{2}\\)"],
      "answer": 0,
      "solution": "By similar triangles s/12 + s/5 = 1 -> s(5+12)/60 = 1 -> s = 60/17."
    },
    {
      "q": "Two circles of radius 5 have centres 6 apart. Find the distance between their two intersection points.",
      "options": ["\\(10\\)", "\\(8\\)", "\\(4\\sqrt{2}\\)", "\\(6\\)"],
      "answer": 1,
      "solution": "Half-distance 3 from each centre along the line of centres; half-chord = sqrt(25-9) = 4; full chord = 8."
    },
    {
      "q": "An equilateral triangle has area \\(9\\sqrt{3}\\). Find its perimeter.",
      "options": ["\\(12\\sqrt{3}\\)", "\\(27\\)", "\\(18\\)", "\\(9\\)"],
      "answer": 2,
      "solution": "(sqrt3/4)s^2 = 9 sqrt3 -> s^2 = 36 -> s = 6 -> perimeter 18."
    },
    {
      "q": "A regular hexagon and an equilateral triangle have the same perimeter. Find the ratio (hexagon area) : (triangle area).",
      "options": ["\\(1 : 1\\)", "\\(6 : 1\\)", "\\(2 : 3\\)", "\\(3 : 2\\)"],
      "answer": 3,
      "solution": "Equal perimeter P: hexagon side P/6, triangle side P/3. Comparing areas gives the ratio 3 : 2."
    },
    {
      "q": "A cone has base radius 3 and slant height 5. Find its total surface area (base + curved).",
      "options": ["\\(9\\pi\\)", "\\(24\\pi\\)", "\\(15\\pi\\)", "\\(30\\pi\\)"],
      "answer": 1,
      "solution": "Curved = pi r l = 15 pi; base = 9 pi; total 24 pi."
    },
    {
      "q": "In a circle of radius 10, a chord subtends a central angle of 60 degrees. Find the area of the minor segment (between chord and arc).",
      "options": ["\\(\\frac{100\\pi}{3} - 25\\sqrt{3}\\)", "\\(\\frac{50\\pi}{3} - 25\\sqrt{3}\\)", "\\(25\\pi - 25\\sqrt{3}\\)", "\\(\\frac{50\\pi}{3} - 50\\sqrt{3}\\)"],
      "answer": 1,
      "solution": "Sector = (60/360)(100 pi) = 50 pi/3; triangle = (1/2)(10)(10) sin60 = 25 sqrt3; segment = 50 pi/3 - 25 sqrt3."
    },
    {
      "q": "A 13-14-15 triangle has an inscribed circle. Find its radius.",
      "options": ["\\(4\\)", "\\(6\\)", "\\(4.5\\)", "\\(3.5\\)"],
      "answer": 0,
      "solution": "Heron: s = 21, area = sqrt(21*8*7*6) = 84; r = area/s = 84/21 = 4."
    },
    {
      "q": "\\(f(x) = \\dfrac{2x + 3}{x - 1}\\). Find \\(f^{-1}(3)\\).",
      "options": ["\\(-6\\)", "\\(9\\)", "\\(3\\)", "\\(6\\)"],
      "answer": 3,
      "solution": "Solve (2x+3)/(x-1) = 3 -> 2x+3 = 3x-3 -> x = 6. (Equivalently f(6) = 15/5 = 3.)"
    },
    {
      "q": "\\(f(x) = \\dfrac{x+1}{x-2}\\). Find a simplified expression for \\(f(f(x))\\).",
      "options": ["\\(\\frac{1-2x}{x-5}\\)", "\\(\\frac{x+1}{x-5}\\)", "\\(\\frac{2x-1}{x-5}\\)", "\\(x\\)"],
      "answer": 0,
      "solution": "f(f(x)) = ((x+1)/(x-2) + 1)/((x+1)/(x-2) - 2) = (2x-1)/(-x+5) = (1-2x)/(x-5)."
    },
    {
      "q": "If \\(f(2x+1) = 4x^2 + 4x + 3\\), find \\(f(x)\\).",
      "options": ["\\(x^2 + x + 1\\)", "\\(x^2 + 3\\)", "\\(x^2 + 2\\)", "\\((2x+1)^2\\)"],
      "answer": 2,
      "solution": "4x^2 + 4x + 3 = (2x+1)^2 + 2, so f(u) = u^2 + 2."
    },
    {
      "q": "The domain of \\(f(x) = \\sqrt{x-1} + \\sqrt{5-x}\\) is:",
      "options": ["\\([1, 5]\\)", "\\((1, 5)\\)", "\\([1, \\infty)\\)", "\\((-\\infty, 1] \\cup [5, \\infty)\\)"],
      "answer": 0,
      "solution": "Need x-1 >= 0 AND 5-x >= 0 -> 1 <= x <= 5."
    },
    {
      "q": "\\(g\\) is odd with \\(g(2) = 5\\); \\(h\\) is even with \\(h(2) = -3\\). Find \\((gh)(2) + (gh)(-2)\\).",
      "options": ["\\(0\\)", "\\(-15\\)", "\\(30\\)", "\\(-30\\)"],
      "answer": 0,
      "solution": "gh is odd (odd x even = odd), so (gh)(-2) = -(gh)(2); their sum is 0."
    },
    {
      "q": "\\(f(x) = 2x - 6\\) and \\(g(x) = \\dfrac{x}{2} + 3\\). Find \\((f \\circ g)(x)\\).",
      "options": ["\\(x\\)", "\\(x - 12\\)", "\\(x + 12\\)", "\\(4x\\)"],
      "answer": 0,
      "solution": "f(g(x)) = 2(x/2 + 3) - 6 = x. They are inverses."
    },
    {
      "q": "The sum of the first \\(n\\) terms of a sequence is \\(S_n = 3n^2 - 2n\\). Find the 10th term.",
      "options": ["53", "58", "280", "55"],
      "answer": 3,
      "solution": "a_10 = S_10 - S_9 = 280 - 225 = 55."
    },
    {
      "q": "In a geometric progression, the 3rd term is 12 and the 6th term is 96. Find the sum of the first 5 terms.",
      "options": ["45", "93", "96", "189"],
      "answer": 1,
      "solution": "r^3 = 8 -> r = 2; a r^2 = 12 -> a = 3; S_5 = 3(2^5 - 1)/(2 - 1) = 93."
    },
    {
      "q": "A sequence satisfies \\(a_1 = 3\\) and \\(a_{n+1} = 2 - \\dfrac{1}{a_n}\\). Find \\(a_{2026}\\).",
      "options": ["\\(\\frac{5}{3}\\)", "\\(1\\)", "\\(2\\)", "\\(\\frac{4053}{4051}\\)"],
      "answer": 3,
      "solution": "The pattern is a_n = (2n+1)/(2n-1) (a_1=3, a_2=5/3, a_3=7/5, ...). So a_2026 = 4053/4051."
    },
    {
      "q": "Simplify \\(\\left( \\dfrac{x^{-2} y^3}{x^3 y^{-1}} \\right)^{-2}\\).",
      "options": ["\\(\\frac{x^{10}}{y^8}\\)", "\\(\\frac{y^8}{x^{10}}\\)", "\\(x^{10} y^8\\)", "\\(\\frac{x^8}{y^{10}}\\)"],
      "answer": 0,
      "solution": "Inside: x^-5 y^4; raised to the -2: x^10 y^-8 = x^10 / y^8."
    },
    {
      "q": "Evaluate \\(\\dfrac{\\sqrt{50} - \\sqrt{18}}{\\sqrt{2}}\\).",
      "options": ["\\(2\\)", "\\(4\\)", "\\(8\\)", "\\(\\sqrt{16}\\)"],
      "answer": 0,
      "solution": "(5 sqrt2 - 3 sqrt2)/sqrt2 = 2 sqrt2 / sqrt2 = 2."
    },
    {
      "q": "Simplify \\(\\dfrac{1}{2 - \\sqrt{3}} + \\dfrac{1}{2 + \\sqrt{3}}\\).",
      "options": ["\\(4\\sqrt{3}\\)", "\\(4\\)", "\\(2\\sqrt{3}\\)", "\\(1\\)"],
      "answer": 1,
      "solution": "Common denominator 4 - 3 = 1: (2 + sqrt3) + (2 - sqrt3) = 4."
    },
    {
      "q": "'If a number is divisible by 6, then it is divisible by 3.' A number is NOT divisible by 3. Which must be true?",
      "options": ["It is not divisible by 6", "It is divisible by 2", "Cannot be determined", "It is divisible by 6"],
      "answer": 0,
      "solution": "Modus tollens: not divisible by 3 implies not divisible by 6."
    },
    {
      "q": "Statements: (1) If it is raining, the match is cancelled. (2) The match was not cancelled. From these alone, what follows about the weather?",
      "options": ["It was not raining", "Cannot be determined", "It was raining", "It was cloudy"],
      "answer": 0,
      "solution": "Modus tollens: the match was not cancelled implies it was not raining."
    },
    {
      "q": "Four students sit in a row. Bek is not at either end. Anvar is immediately to the left of Bek. Diled is at the right end. Where is Karim?",
      "options": ["Third from left", "Left end", "Second from left", "Right end"],
      "answer": 1,
      "solution": "Diled is 4th. Anvar-Bek adjacent with Bek not at an end -> Anvar 2nd, Bek 3rd. So Karim is 1st (left end)."
    },
    {
      "q": "Exactly two of these three statements are true: (1) Sam owns a dog. (2) Sam owns a cat. (3) Sam owns a dog or a cat (inclusive). What can be concluded?",
      "options": ["Sam owns neither", "Sam owns a dog for certain", "Sam owns both", "Sam owns exactly one of the two"],
      "answer": 3,
      "solution": "If both -> all three true (no). If neither -> all false (no). Exactly one -> (3) true plus one of (1),(2): exactly two true."
    },
    {
      "q": "A says 'B is a liar.' B says 'C is a liar.' C says 'A and B are both liars.' Each is either a truth-teller (always true) or a liar (always false). Who is the truth-teller?",
      "options": ["Only A", "Only B", "A and C", "Only C"],
      "answer": 1,
      "solution": "Testing cases: C true forces a contradiction; A true forces a contradiction; B true (A liar, C liar) is consistent. Only B."
    },
    {
      "q": "'Everyone who studied passed. Some who passed did not study.' Are these statements consistent?",
      "options": ["Only if no one studied", "Cannot be determined", "Yes, consistent", "No, inconsistent"],
      "answer": 2,
      "solution": "'Studied -> passed' does NOT mean only studiers passed; non-studiers can pass too. Consistent."
    }
  ]
};
