


# Solving diagonal matrices

```{div} Problem
Let $\boldsymbol{D}$ be a diagonal $n \times n$ matrix i.e. the only non-zero elements are those on the main diagonal
of the matrix.

$$
\boldsymbol{D} \boldsymbol{x} = \begin{pmatrix}
        d_1 & 0 & 0 & \cdots & 0  \\
        0 & d_2 & 0 & \cdots & 0  \\
        \vdots & & \ddots & & \vdots \\
        0 & \cdots & 0 & d_{n-1} & 0 \\
        0 & \cdots & 0 & 0 & d_n
    \end{pmatrix}
    \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}
    =
    \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{pmatrix}
$$

---

*Solution.* Note that in this case each equation is "uncoupled" from the others and we can write

$$
    d_i x_i = b_i\ \forall i \quad\implies\quad x_i = \frac{b_i}{d_i}\ \forall i.
$$
```


# Solving triangular matrices

```{div} Problem

Let $\boldsymbol{U}$ be an upper triangular $n \times n$ matrix i.e. all elements below the main-diagonal are zero.

$$
    \boldsymbol{U} \boldsymbol{x}  =
    \begin{pmatrix}
        u_{11} & u_{12} & u_{13} & \cdots & u_{1n}  \\
        0 & u_{22} & u_{23} & \cdots & u_{2n}  \\
        \vdots & & \ddots & & \vdots \\
        0 & \cdots & 0 & u_{n-1n-1} & u_{n-1n} \\
        0 & \cdots & 0 & 0 & u_{nn}
    \end{pmatrix}
    \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix}
    =
    \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}
$$

Note that in this case, the last equation (\aka the last row) is ``uncoupled''
from the other rows. Thus we can write

$$
    x_n = \frac{b_n}{u_{nn}}.
$$

Then consider the second to last equation (i.e. the second to last row).
This row now reads

$$
    u_{n-1n-1}x_{n-1} + u_{n-1n}x_n = b_{n-1}.
$$

Note that since we already know $x_n$ this is a single linear equation for a
single unknown, hence we can solve for $x_{n-1}$. This gives us

$$
    x_{n-1} = \frac{b_{n-1} - u_{n-1n}x_n}{u_{n-1n-1}}.
$$

Next consider the next row up, once again we find a linear equation with
a single unknown $x_{n-2}$ for which we can solve. We can repeat this procedure
until we arrive at the ``top most row'', leading to the following algorithm.

$$
    x_i = \frac{b_i - \displaystyle\sum_{j=i+1}^{n} u_{ij} x_{j}}{u_{ii}}
$$
```
