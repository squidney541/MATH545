Search.setIndex({"docnames": ["appendix/gaussian_elimination_process", "appendix/multiplication", "appendix/solving_special_matrices", "dft/complex", "dft/convolution", "dft/dft", "dft/fft", "dft/frequency", "eigenvalues/computing_eigenvalues", "eigenvalues/diagonalization", "eigenvalues/svd", "index", "notebooks/01_linear_systems", "notebooks/02_LU_decomposition", "notebooks/03_polynomial_interpolation", "notebooks/04_spline_interpolation", "notebooks/05_finite_difference_method", "notebooks/06_least_squares_regression", "notebooks/07_pca", "notebooks/08_deblurring_images", "notebooks/09_computed_tomography", "notebooks/10_computing_eigenvalues", "notebooks/12_fft", "orthogonality/complement", "orthogonality/least_squares", "orthogonality/projection", "orthogonality/qr", "orthogonality/subspaces", "systems/error", "systems/interpolation", "systems/lu", "systems/odes"], "filenames": ["appendix/gaussian_elimination_process.md", "appendix/multiplication.md", "appendix/solving_special_matrices.md", "dft/complex.md", "dft/convolution.md", "dft/dft.md", "dft/fft.md", "dft/frequency.md", "eigenvalues/computing_eigenvalues.md", "eigenvalues/diagonalization.md", "eigenvalues/svd.md", "index.md", "notebooks/01_linear_systems.ipynb", "notebooks/02_LU_decomposition.ipynb", "notebooks/03_polynomial_interpolation.ipynb", "notebooks/04_spline_interpolation.ipynb", "notebooks/05_finite_difference_method.ipynb", "notebooks/06_least_squares_regression.ipynb", "notebooks/07_pca.ipynb", "notebooks/08_deblurring_images.ipynb", "notebooks/09_computed_tomography.ipynb", "notebooks/10_computing_eigenvalues.ipynb", "notebooks/12_fft.ipynb", "orthogonality/complement.md", "orthogonality/least_squares.md", "orthogonality/projection.md", "orthogonality/qr.md", "orthogonality/subspaces.md", "systems/error.md", "systems/interpolation.md", "systems/lu.md", "systems/odes.md"], "titles": ["Gaussian Elimination", "Matrix Multiplication", "Solving special matrices", "Complex Vectors", "Convolution and Filtering", "Discrete Fourier Transform", "Fast Fourier Transform", "Frequency, Amplitude and Phase", "Computing Eigenvalues", "Diagonalization", "Singular Value Decomposition", "MATH 545 Applied Linear Algebra", "Linear Systems of Equations", "LU Decomposition", "Polynomial Interpolation", "Natural Cubic Spline Interpolation", "Finite Difference Method", "Fitting Models to Data", "Principal Component Analysis", "Deblurring Images", "Computed Tomography", "Computing Eigenvalues", "Discrete Fourier Transform", "Orthogonal Complement", "Least Squares Approximation", "Orthogonal Projection", "QR Decomposition", "Subspaces", "Error Analysis", "Interpolation", "LU Decomposition", "Differential Equations"], "terms": {"matrix": [0, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 21, 23, 24, 25, 26, 27, 29, 30, 31], "A": [0, 1, 3, 7, 8, 9, 10, 13, 14, 15, 16, 17, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "vector": [0, 1, 4, 5, 6, 7, 8, 9, 10, 11, 17, 18, 20, 21, 24, 27, 29], "b": [0, 1, 3, 8, 9, 10, 13, 14, 15, 16, 17, 19, 20, 21, 24, 27, 28, 29, 30, 31], "we": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 30, 31], "assembl": 0, "its": [0, 7, 23, 28, 31], "augment": [0, 30], "proce": 0, "through": [0, 20, 23, 26, 27, 30], "follow": [0, 2, 7, 20, 23, 29, 30], "sequenc": [0, 8, 30], "until": [0, 2, 4, 6], "final": [0, 10, 11, 23, 26, 29], "upper": [0, 17, 21, 26, 30], "triangular": [0, 17, 21, 26, 30], "left": [0, 5, 6, 7, 8, 9, 10, 12, 13, 16, 17, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31], "begin": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "arrai": [0, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21, 23, 24, 25, 26, 27, 29, 30, 31], "1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "c": [0, 3, 4, 5, 6, 7, 8, 10, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 27, 28, 29, 30], "end": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "right": [0, 5, 6, 7, 8, 9, 10, 12, 13, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31], "mapsto": 0, "2": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "dot": [0, 1, 3, 5, 8, 9, 10, 12, 14, 15, 17, 18, 23, 24, 25, 26, 27, 28, 29, 30, 31], "n": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "where": [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 16, 17, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31], "u": [0, 2, 3, 4, 9, 13, 23, 25, 26, 27, 29, 30], "In": [0, 1, 4, 8, 9, 10, 17, 23, 24, 26, 27, 28, 29, 30, 31], "more": [0, 8, 10, 23, 24, 29, 31], "detail": [0, 2], "each": [0, 1, 2, 3, 5, 7, 8, 9, 10, 13, 14, 15, 16, 18, 20, 21, 23, 25, 29, 30, 31], "step": [0, 8, 21, 31], "thi": [0, 2, 6, 7, 8, 9, 10, 11, 14, 17, 21, 23, 28, 29, 30, 31], "process": [0, 8, 30], "element": [0, 2, 22], "column": [0, 1, 5, 8, 9, 10, 13, 17, 18, 19, 23, 25, 26, 27, 29, 30], "i": [0, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 20, 23, 24, 25, 26, 28, 29, 30], "below": [0, 2, 10, 13, 28, 30], "diagon": [0, 10, 13, 19, 21, 23, 28, 29, 30], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "4": [0, 5, 6, 7, 8, 10, 11, 12, 13, 16, 17, 18, 19, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31], "a_": [0, 8, 16, 21, 28, 30, 31], "11": [0, 2, 14, 27, 29, 31], "12": [0, 2, 8, 10, 12, 18, 20, 22, 26, 29], "1n": [0, 2], "b_1": [0, 2, 16, 29, 30, 31], "21": [0, 2, 10, 31], "22": [0, 2], "2n": [0, 2], "b_2": [0, 2, 16, 29, 30, 31], "vdot": [0, 1, 2, 3, 4, 5, 6, 7, 10, 12, 13, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "ddot": [0, 2, 5, 6, 9, 10, 12, 13, 14, 16, 24, 26, 27, 28, 29, 30, 31], "n1": [0, 2], "n2": 0, "nn": [0, 2, 5], "b_n": [0, 2, 16, 29, 30, 31], "first": [0, 2, 5, 9, 10, 17, 18, 23, 26, 27, 29, 30, 31], "main": [0, 2], "subtract": [0, 4, 18, 31], "frac": [0, 2, 3, 5, 6, 7, 8, 9, 10, 16, 18, 21, 25, 26, 28, 29, 31], "time": [0, 1, 2, 4, 8, 9, 10, 17, 18, 19, 21, 23, 24, 26, 27, 28, 30], "row": [0, 2, 10, 13, 17, 18, 19, 20, 23, 26, 27, 30], "from": [0, 2, 4, 5, 7, 8, 10, 14, 15, 17, 18, 19, 20, 22, 23, 25, 29, 30, 31], "second": [0, 2, 6, 10, 16, 23, 30], "other": [0, 1, 2, 4, 8, 9, 10, 21, 23, 27, 28, 29, 30, 31], "word": [0, 1, 4, 8, 9, 10, 23, 27, 28, 29, 30], "r_2": [0, 16, 31], "r_1": [0, 16, 17, 24, 26, 31], "31": 0, "r_3": [0, 31], "3": [0, 2, 4, 5, 6, 7, 8, 9, 10, 12, 13, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "And": [0, 6, 20], "so": [0, 2, 5, 7, 8, 9, 10, 13, 18, 20, 21, 23, 29, 30, 31], "r_n": [0, 16, 31], "result": [0, 6, 8, 15, 17, 18, 20, 21, 28, 29, 30, 31], "new": 0, "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "next": [0, 2, 10, 13], "consid": [0, 2, 7, 8, 9, 13, 14, 15, 16, 27, 28, 29, 30, 31], "sub": 0, "found": [0, 31], "ignor": 0, "abov": [0, 8, 10, 30, 31], "Then": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 23, 25, 27, 28, 29, 30, 31], "repeat": [0, 2, 16, 21], "give": [0, 2, 8, 10, 14, 30, 31], "us": [0, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 26, 28, 29, 30, 31], "5": [0, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 25, 27, 28, 29, 30, 31], "23": [0, 2], "33": [0, 29], "3n": 0, "b_3": [0, 29], "n3": 0, "previou": [0, 5, 7, 8, 9, 25, 31], "find": [0, 2, 5, 7, 8, 9, 10, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31], "what": [0, 2, 7, 8, 14, 17, 24], "cost": [0, 2], "amatrix": 0, "ha": [0, 5, 6, 7, 8, 9, 17, 18, 21, 27, 28, 29, 30], "size": [0, 6, 10, 12, 14, 15, 16, 19, 21, 22, 29, 30, 31], "most": [0, 2, 8, 10, 17, 18, 24, 26, 28, 29, 31], "expens": 0, "need": [0, 6, 10, 19, 20, 29, 30], "non": [0, 2, 10], "zero": [0, 2, 3, 13, 16, 19, 25, 27, 30], "via": [0, 4], "oper": [0, 2, 28, 30], "That": [0, 9, 14, 18], "s": [0, 3, 6, 10, 13, 14, 15, 17, 18, 19, 20, 23, 27, 29], "total": [0, 8, 27], "float": [0, 2], "point": [0, 2, 6, 10, 14, 15, 17, 18, 24, 25, 29, 31], "when": [0, 2, 5, 9, 10, 14, 24, 29, 30], "ar": [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "deal": 0, "k": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 14, 15, 18, 19, 20, 21, 22, 23, 25, 28, 29, 30, 31], "unknown": [0, 2, 14, 29, 30, 31], "thu": [0, 2], "requir": [0, 6, 29, 31], "For": [0, 5, 6, 9, 10, 16, 29, 30, 31], "add": [0, 4, 30, 31], "up": [0, 2, 5], "individu": 0, "align": [0, 4, 5, 6, 7, 8, 9, 10, 14, 23, 25, 26, 28, 29, 30, 31], "sum_": [0, 2, 4, 5, 6, 10, 18, 23, 28, 31], "let": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "m": [1, 4, 6, 9, 10, 13, 20, 23, 24, 25, 26, 27, 28, 30], "matric": [1, 9, 10, 11, 13, 17, 20, 28, 30], "If": [1, 3, 5, 8, 9, 10, 23, 24, 26, 27, 28, 30], "boldsymbol": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 23, 24, 25, 26, 27, 28, 29, 30, 31], "x": [1, 2, 4, 5, 6, 7, 8, 9, 10, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "all": [1, 2, 3, 5, 8, 9, 10, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29, 30], "mathbb": [1, 3, 4, 5, 6, 7, 9, 10, 18, 23, 24, 25, 26, 27, 28, 29, 30], "r": [1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "proof": [1, 3, 4, 5, 6, 7, 9, 10, 11, 23, 24, 26, 27, 28, 29, 30], "standard": [1, 3, 5, 17], "basi": [1, 7, 10, 18, 23, 25, 26, 29], "e": [1, 2, 3, 5, 6, 7, 8, 10, 19, 20, 30], "_1": [1, 3, 5, 7, 8, 9, 10, 18, 23, 25, 26, 27, 28, 29, 30], "bmatrix": [1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "_2": [1, 5, 8, 9, 10, 18, 23, 25, 26, 27, 28, 29], "_n": [1, 3, 5, 7, 8, 9, 10, 18, 26, 27, 29, 30], "_k": [1, 5, 6, 7, 8, 10, 18, 19, 21, 23, 25, 26, 29, 30], "index": [1, 4, 5, 7, 12, 13, 20, 30], "everywher": 1, "els": [1, 13], "equal": [1, 4, 5, 7, 9, 10, 14, 18, 23, 24, 27, 28, 29, 30, 31], "th": [1, 5, 6, 10, 29, 30], "sinc": [1, 2, 5, 7, 8, 9, 10, 21, 23, 27, 28, 29, 30], "see": [1, 3, 4, 6, 8, 9, 10, 17, 21, 23, 24, 26, 28, 29, 30, 31], "therefor": [1, 4, 5, 6, 7, 8, 9, 10, 13, 19, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31], "p": [1, 8, 9, 10, 14, 15, 16, 18, 20, 21, 25, 26, 28, 29, 30, 31], "cdot": [1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "ab": [1, 7, 9, 21, 22], "can": [1, 2, 3, 5, 6, 7, 10, 17, 20, 21, 23, 27, 28, 29, 30, 31], "written": [1, 27], "d": [2, 9, 14, 17, 18, 23, 28, 29, 30], "onli": [2, 3, 6, 8, 9, 10, 23, 27, 28, 29, 30, 31], "those": [2, 4], "pmatrix": 2, "d_1": [2, 10, 28, 29], "d_2": [2, 10, 28, 29], "d_": [2, 29], "d_n": [2, 6, 28, 29], "x_1": [2, 5, 6, 7, 23, 27, 28, 30], "x_2": [2, 5, 6, 7, 27, 30], "x_n": [2, 5, 6, 7, 23, 27, 28, 30], "solut": [2, 9, 10, 11, 12, 13, 14, 16, 17, 23, 24, 25, 26, 27, 28, 29, 30, 31], "note": [2, 3, 5, 6, 8, 10, 24, 25, 28, 29, 30, 31], "case": [2, 24, 29, 31], "equat": [2, 9, 10, 11, 14, 16, 23, 29, 30], "uncoupl": 2, "write": [2, 3, 5, 6, 10, 13, 23, 24, 26, 31], "d_i": [2, 28], "x_i": [2, 8, 30], "b_i": [2, 30], "foral": 2, "quad": 2, "impli": [2, 9, 10, 24, 26, 27, 28, 29, 30, 31], "algorithm": [2, 6, 8, 9, 11, 18, 21, 25, 26, 30], "an": [2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 24, 25, 26, 27, 29, 30, 31], "u_": [2, 4, 30], "13": [2, 8, 30], "x_": [2, 5, 6, 7, 30], "b_": [2, 16, 31], "last": [2, 7, 24, 31], "aka": 2, "now": [2, 7, 9, 10, 13, 15, 17, 21, 23, 31], "read": 2, "alreadi": 2, "know": [2, 10, 13, 14, 21, 23, 27], "singl": [2, 27], "linear": [2, 8, 9, 10, 15, 16, 24, 28, 29, 30, 31], "henc": 2, "onc": 2, "again": [2, 6, 10, 17], "which": [2, 6, 8, 9, 10, 13, 14, 17, 18, 21, 23, 24, 25, 27, 29, 30], "procedur": [2, 6], "arriv": 2, "top": [2, 8, 10, 30], "lead": [2, 10, 27, 30], "displaystyl": [2, 5, 10, 28, 31], "j": [2, 8, 9, 10, 13, 21, 23, 24, 25, 28, 29, 30], "ij": 2, "ii": 2, "count": [2, 8], "number": [2, 3, 5, 6, 8, 9, 10, 14, 17, 19, 21, 23, 25, 27, 29, 30, 31], "flop": 2, "l": [2, 6, 13, 27, 29, 30], "t": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 29, 30, 31], "could": [2, 25], "simpli": 2, "take": 2, "transpos": [2, 3], "appli": [2, 6, 8, 26, 30, 31], "howev": [2, 5, 9, 10, 18, 20, 27, 30], "fundament": [2, 9], "present": 2, "full": [2, 10], "l_": [2, 29], "how": [2, 19, 27, 28, 30, 31], "pattern": 2, "here": [2, 7, 30], "differ": [2, 7, 9, 10, 13, 17, 20, 24, 28, 29, 30], "compar": [2, 15, 16, 20, 21, 28, 29], "essenti": 2, "flip": 2, "our": [2, 8, 12, 13, 15, 31], "strategi": [2, 10, 23], "around": [2, 14, 29], "start": [2, 8, 14, 21], "down": 2, "also": [2, 3, 6, 7, 10, 11, 21, 23, 25, 27, 29], "same": [2, 6, 7, 8, 10, 13, 17, 19, 21, 23, 26, 30, 31], "repres": [3, 5, 7, 8, 10, 12, 17, 19, 20, 29], "form": [3, 6, 7, 10, 11, 16, 17, 23, 24, 27, 29, 30, 31], "z": [3, 8, 19, 23], "polar": 3, "theta": [3, 18, 23], "set": [3, 10, 17, 22, 23, 25, 27, 28, 29], "length": [3, 5, 6, 10, 18, 28, 29], "entri": [3, 5, 6, 7, 8, 9, 10, 13, 27, 28, 29, 30], "space": [3, 11, 14, 26, 27, 29, 31], "inner": [3, 9, 11, 23], "product": [3, 4, 9, 10, 11, 23, 29], "langl": [3, 5, 6, 9, 10, 23, 25, 26], "v": [3, 4, 8, 9, 10, 12, 23, 25, 26, 27, 29], "rangl": [3, 5, 6, 9, 10, 23, 25, 26], "overlin": [3, 5, 7, 9], "sqrt": [3, 5, 6, 7, 8, 10, 21, 23, 25, 26, 28], "satisfi": [3, 5, 7, 10, 23, 27, 28, 29], "real": [3, 5, 9, 10, 21, 22], "call": [3, 6, 8, 9, 10, 13, 14, 17, 23, 24, 25, 26, 27, 28, 29, 30], "part": [3, 6, 11], "imaginari": 3, "mathrm": [3, 4, 5, 6, 7, 9, 10, 23, 24, 25, 26, 27, 28, 29, 30], "re": 3, "im": 3, "arctan": 3, "visual": [3, 6, 10, 13, 20], "dimension": [3, 23], "euler": 3, "formula": [3, 6, 7, 9, 10, 16, 29, 31], "co": [3, 5, 7, 16, 18, 22, 23, 24, 31], "sin": [3, 5, 7, 14, 15, 18, 24, 31], "ib": 3, "modulu": 3, "angl": [3, 7, 18, 20, 22, 23], "argument": [3, 7], "arg": 3, "conjug": 3, "invers": [3, 5, 10, 20, 30], "given": [3, 4, 5, 7, 8, 10, 14, 15, 24, 25, 26, 27, 28, 29, 30], "v_1": [3, 4], "v_n": 3, "u_1": [3, 4, 23, 27], "u_n": 3, "geq": [3, 10, 24, 27, 28], "norm": [3, 12, 21, 23], "orthogon": [3, 5, 9, 10, 11, 18, 24], "hermitian": 3, "unitari": [3, 5], "discret": [4, 7, 16, 31], "fourier": [4, 7, 11], "transform": [4, 7, 11, 28, 30], "two": [4, 6, 9, 10, 17, 18, 27, 29, 30], "signal": [4, 5, 6, 7], "elementwis": 4, "domain": [4, 16, 31], "correspond": [4, 8, 9, 10, 14, 20, 21, 28, 30, 31], "dft": [4, 5, 6, 22], "multipl": [4, 5, 8, 9, 10, 19, 21, 23, 25, 26, 27, 30], "frequenc": 4, "y": [4, 5, 6, 7, 8, 10, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 27, 28, 29, 30, 31], "interpret": 4, "modular": 4, "arithmet": 4, "outsid": 4, "interv": [4, 17, 29], "insid": 4, "wikipedia": [4, 6, 8, 10, 24, 26, 28, 29, 30, 31], "comput": [4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 17, 18, 19, 23, 24, 25, 26, 28, 29, 30, 31], "hadamard": 4, "circ": 4, "u_0": [4, 30], "v_0": 4, "v_": 4, "u_0v_0": 4, "u_1v_1": 4, "denot": [4, 16, 23, 29, 30, 31], "definit": [4, 5, 8, 10, 28], "omega_n": [4, 5, 6, 7], "project": [5, 9, 10, 18, 24], "onto": [5, 9, 10, 18, 24, 26], "f": [5, 6, 7, 20, 24, 29, 31], "_0": [5, 8, 21], "_": [5, 6, 7, 8, 10, 21, 23, 24, 25, 26, 28, 29], "complex": [5, 7, 9], "omega": [5, 7], "pi": [5, 6, 7, 14, 15, 16, 18, 22, 23, 24, 31], "integ": [5, 7, 29], "nk": [5, 6, 7], "sum": [5, 6, 7, 8, 10, 14, 17, 22, 24], "geometr": [5, 9], "seri": [5, 31], "have": [5, 7, 9, 10, 17, 20, 21, 23, 24, 28, 29, 30, 31], "kn": 5, "0s": [5, 10], "except": [5, 30], "leftarrow": 5, "text": [5, 6, 8, 10, 23, 25, 27, 28], "python": [5, 7, 8, 11, 13, 18], "exampl": [5, 6, 8, 9, 20, 25, 26, 29, 30, 31], "hspace": [5, 6, 7, 8, 9, 10, 12, 16, 23, 24, 25, 26, 27, 28, 29, 30, 31], "10mm": [5, 6, 7, 8, 9, 10, 12, 16, 23, 24, 25, 26, 27, 28, 29, 30, 31], "posit": [5, 7, 8, 10, 12, 29], "renewcommand": [5, 6, 7, 29], "arraystretch": [5, 6, 7, 29], "k_n": [5, 7], "2k": [5, 7], "omega_2": 5, "omega_3": 5, "omega_4": 5, "_3": [5, 8, 9, 10, 23, 25, 26, 27], "ell": [5, 23, 27], "cl": 5, "otherwis": [5, 28], "show": [5, 7, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 26, 28, 29], "proposit": [5, 7], "clearli": [5, 8, 10, 23], "By": [5, 9, 10, 28], "f_n": [5, 6, 24], "t_0": [5, 14, 15, 16, 17, 29, 31], "t_1": [5, 14, 17, 24, 29, 31], "t_": [5, 15, 29], "25": [5, 6, 31], "expand": 5, "term": [5, 6, 7, 8, 10, 23, 30, 31], "coeffici": [5, 10, 14, 15, 17, 24, 29, 30], "respect": [5, 6, 9, 29], "studi": [5, 7, 11], "sound": [5, 6, 7], "imag": [5, 7, 10, 18, 27, 28], "ani": [5, 7, 8, 9, 10, 13, 23, 26, 27, 28, 29, 30, 31], "kind": [5, 7, 29, 31], "inform": [5, 7, 10, 18, 29], "context": [5, 7], "refer": [5, 7], "notat": [5, 7, 16, 17, 24, 28, 29, 30, 31], "x_0": [5, 6, 7], "fact": [5, 8, 26], "idft": 5, "t_n": [5, 14, 15, 17, 29], "determin": [5, 8, 9, 10, 23, 25, 27, 28, 29, 30, 31], "whether": [5, 8, 9, 10, 23, 25, 27, 28, 29, 30, 31], "statement": [5, 8, 9, 10, 23, 25, 27, 28, 29, 30, 31], "true": [5, 7, 8, 9, 10, 13, 14, 15, 16, 18, 22, 23, 25, 27, 28, 29, 30, 31], "fals": [5, 8, 9, 10, 13, 18, 23, 25, 27, 28, 29, 30, 31], "even": [5, 6], "suppos": [5, 8, 9, 10, 17, 21, 24, 28, 29, 30, 31], "9": [5, 12, 18, 29, 30, 31], "valu": [5, 7, 8, 14, 15, 18, 19, 20, 21, 24, 28, 29, 30, 31], "indic": [5, 6], "5mm": [5, 7, 8, 10, 25, 26, 27, 30, 31], "2i": [5, 6, 7], "6": [5, 7, 8, 10, 12, 13, 15, 18, 20, 21, 25, 27, 29, 30, 31], "3i": [5, 7, 9], "8": [5, 6, 7, 8, 10, 13, 14, 17, 18, 20, 21, 22, 29, 31], "odd": [5, 6], "fft": [6, 7], "effici": [6, 8, 18, 26, 29, 30], "commonli": [6, 28], "sampl": [6, 7, 17, 20], "44": 6, "khz": 6, "audio": 6, "one": [6, 8, 9, 30, 31], "44100": [6, 22], "approxim": [6, 8, 10, 11, 12, 16, 21, 31], "billion": 6, "yike": [6, 14, 29], "practic": [6, 8], "assum": [6, 9, 10, 24, 28], "rr": [6, 10, 26, 30], "consist": [6, 12, 24, 29, 30], "x_3": [6, 8, 30], "look": [6, 10, 17, 20], "split": 6, "2m": 6, "2mk": 6, "omega_": 6, "mk": 6, "leq": [6, 23, 28, 29], "underbrac": 6, "mn": 6, "put": 6, "togeth": [6, 31], "get": [6, 8, 10, 29, 30, 31], "coolei": 6, "tukei": 6, "smaller": [6, 10], "faster": [6, 8], "keep": [6, 13], "power": [6, 9], "symmetri": 6, "reduc": [6, 30], "further": [6, 7], "cc": [6, 8], "x_4": 6, "stackrel": 6, "longrightarrow": [6, 29, 30], "x_6": 6, "x_5": 6, "x_7": 6, "d_8": 6, "rrrr": [6, 24, 30, 31], "f_4": 6, "verifi": [6, 8, 10, 13, 15, 23, 30], "mathbf": [7, 13, 16, 17, 18, 20, 21, 26], "phi": [7, 22], "period": 7, "per": 7, "7": [7, 12, 13, 17, 21, 29, 30, 31], "sketch": 7, "properti": [7, 11, 23, 27, 28], "prove": [7, 10, 23, 28], "similarli": [7, 28], "trigonometr": 7, "ident": [7, 9, 10, 25, 30], "alpha": [7, 8, 16, 17, 18, 31], "beta": [7, 16, 31], "magnitud": [7, 22, 28], "plot": [7, 12, 13, 14, 15, 16, 17, 18, 31], "versu": 7, "4i": 7, "_7": 7, "occur": [7, 9, 10, 24], "mai": [7, 8, 9, 10, 28], "rewrit": [7, 31], "a_1": [7, 29], "phi_1": [7, 29], "a_3": [7, 29], "phi_3": 7, "run": [7, 8], "code": 7, "100": [7, 10, 14, 16, 21, 22], "np": [7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "random": [7, 8, 14, 15, 17, 18, 19, 20, 22], "rand": [7, 17], "plt": [7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "stem": [7, 22], "use_line_collect": [7, 22], "describ": [7, 8, 10, 27, 29, 30], "explain": [7, 27, 28, 29, 31], "why": [7, 27, 30, 31], "gener": [7, 10, 16, 17, 23, 24, 27, 28, 31], "shape": [7, 13, 17, 18, 19, 20], "recal": 7, "uniform": [7, 8], "distribut": [7, 8, 17, 23], "match": 7, "It": 8, "root": [8, 9, 10, 23], "characterist": [8, 9, 10], "polynomi": [8, 9, 10, 15, 31], "c_a": [8, 9], "instead": 8, "sever": [8, 24], "numer": [8, 31], "without": [8, 21, 27, 30], "squar": [8, 11, 12, 17, 19, 20, 23, 28, 30], "lambda": [8, 9, 10, 21], "domin": [8, 10, 21], "algebra": [8, 9, 12], "mu": 8, "lambda_1": [8, 9, 10, 21], "lambda_n": [8, 9, 21], "eigenvector": [8, 10, 21], "combin": [8, 19, 27, 30], "c_1": [8, 10, 14, 16, 17, 24, 27, 29, 31], "c_n": [8, 10, 24, 29], "c_2": [8, 14, 16, 17, 24, 29, 31], "lambda_2": [8, 9, 10], "rightarrow": [8, 9, 10, 24, 29, 31], "infti": [8, 21, 28, 31], "becaus": [8, 9, 14, 27, 31], "lambda_i": [8, 9, 10], "veri": [8, 14, 28, 29, 31], "larg": [8, 9, 10, 14, 20, 28, 29], "increas": [8, 14, 21, 29, 31], "help": 8, "normal": [8, 10, 18, 21], "simplest": [8, 29], "wai": [8, 9, 10, 17, 24, 26, 28, 29], "divid": 8, "max": [8, 21, 28], "choos": [8, 16, 21, 23, 31], "_4": [8, 27], "75": [8, 18, 21, 29], "67": 8, "approx": [8, 16, 24, 29, 31], "actual": [8, 20], "4142": 8, "particular": [8, 20, 26, 27, 28, 30], "lambda_k": [8, 9], "converg": [8, 21], "order": [8, 10, 16, 20, 30], "decreas": [8, 10, 19, 31], "equival": [8, 10, 30, 31], "smallest": [8, 10, 21], "At": 8, "solv": [8, 9, 10, 13, 14, 15, 16, 17, 19, 20, 24, 29, 30, 31], "system": [8, 9, 10, 11, 13, 14, 15, 16, 17, 24, 27, 28, 29, 30, 31], "go": 8, "repeatedli": 8, "should": [8, 9], "lu": [8, 11, 21, 23, 27, 29], "decomposit": [8, 11, 18, 21, 23, 27, 29], "forward": [8, 31], "backward": [8, 31], "substitut": [8, 16, 31], "rrr": [8, 10, 24, 25, 29, 30], "phantom": [8, 10, 25, 29, 30], "choleski": [8, 11], "17": [8, 21, 29], "49": 8, "26": 8, "00": [8, 21, 29], "53": 8, "35": 8, "06": 8, "05": 8, "50": [8, 21, 29], "42": [8, 29], "000": 8, "532": 8, "347": 8, "12061476": 8, "adjac": 8, "direct": [8, 10, 19, 27], "graph": 8, "rank": [8, 10, 20, 23, 24, 25, 26, 30], "import": [8, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "vertex": 8, "g": 8, "vertic": [8, 10, 19], "edg": 8, "collect": [8, 20, 23, 29, 30], "webpag": 8, "link": 8, "anoth": [8, 30], "maximum": [8, 10, 28], "itself": [8, 23], "stochast": 8, "click": 8, "p_": [8, 25, 29], "probabl": 8, "construct": [8, 9, 11, 15, 17, 25, 26, 29, 30], "googl": 8, "teleport": 8, "paramet": [8, 24], "1s": [8, 10], "everi": [8, 9, 18, 23, 30], "beyond": [8, 29], "web": 8, "between": [8, 10, 23, 29], "usual": [8, 21, 23], "chosen": [8, 10, 31], "transit": 8, "do": [8, 10, 13, 17, 19, 24, 27, 28, 29], "either": [8, 10, 23], "visit": 8, "webapg": 8, "accord": [8, 10], "85": 8, "There": [8, 9, 10, 17, 18, 23, 24, 25, 29, 30, 31], "exist": [8, 9, 10, 13, 14, 24, 26, 27, 29, 30], "uniqu": [8, 9, 14, 17, 23, 24, 25, 29, 30], "steadi": 8, "state": [8, 24, 28], "search": 8, "list": [8, 30], "contain": [8, 10, 20, 23, 27], "hundr": 8, "million": 8, "huge": [8, 20], "But": [8, 14], "founder": 8, "well": 8, "enough": [8, 9, 31], "after": [8, 20, 30], "about": [8, 12, 29], "15": [8, 12, 13, 14, 15, 19, 22, 29], "0375": 8, "4625": 8, "3208": 8, "8875": 8, "2472": 8, "4681": 8, "recurs": 8, "largest": [8, 10, 20], "absolut": [8, 10, 21], "make": [8, 10], "prevent": 8, "becom": 8, "too": 8, "small": [8, 9, 10, 14, 15, 28, 31], "produc": [8, 10, 21, 31], "accur": 8, "necessari": 8, "section": [8, 9, 10, 29, 31], "As": 8, "happen": [8, 14], "complet": 8, "exclud": 8, "diagonaliz": [9, 10], "linearli": [9, 19, 24, 27], "independ": [9, 24], "symmetr": [9, 10, 21, 23, 26], "distinct": [9, 29], "some": [9, 12, 13, 14, 17, 19, 24, 25], "nonzero": [9, 10, 13, 23, 25, 27, 30], "invert": [9, 10, 20, 21, 29], "det": [9, 10, 28, 29, 30], "suggest": 9, "work": [9, 10, 11, 13, 17, 30], "done": 9, "cours": [9, 11], "impract": 9, "degre": [9, 14, 17, 23, 29, 31], "ll": 9, "better": [9, 10, 31], "later": [9, 28], "xi": [9, 10], "pd": 9, "pdp": 9, "ap": 9, "yield": [9, 14, 16, 29, 30, 31], "_i": [9, 10, 23, 25], "lambda_j": 9, "ne": [9, 27, 29], "factor": [9, 17, 30], "pm": 9, "prod_": [9, 29], "m_i": 9, "dimens": [9, 23, 29], "eigenspac": 9, "e_": [9, 30], "Not": [9, 30], "doe": [9, 13, 22, 24, 28, 29, 30, 31], "eiganvalu": 9, "aa": [9, 10, 23, 26], "subset": [9, 10, 23, 25, 27], "subspac": [9, 25, 26], "dim": [9, 23, 27], "c_p": 9, "h": [9, 16, 25, 31], "elementari": [9, 25, 26, 30, 31], "reflector": [9, 25, 26], "c_h": 9, "bab": 9, "lambda_3": 9, "ta": [10, 23, 24, 26], "both": [10, 19, 25, 26, 27, 31], "pd_1p": 10, "qd_2q": 10, "sigma": [10, 18], "q": [10, 16, 18, 21, 24, 26, 31], "eigenvalu": [10, 11], "throughout": 10, "neg": 10, "must": 10, "calcul": [10, 17], "unit": [10, 23, 25, 28, 30], "convers": 10, "similar": [10, 21, 30], "regard": 10, "relat": [10, 26], "label": 10, "lambda_r": 10, "sigma_i": 10, "conclud": 10, "sigma_1": 10, "sigma_2": 10, "sigma_r": 10, "ccc": [10, 25], "hline": [10, 29], "orthonorm": [10, 18, 23, 25, 26], "15mm": 10, "_r": [10, 27], "_m": [10, 23, 25, 26, 27], "nullspac": [10, 23], "defin": [10, 15, 16, 21, 23, 28, 29, 31], "aq": 10, "chose": 10, "connect": 10, "inspect": 10, "extend": [10, 26], "setup": [10, 24, 29, 31], "rcr": 10, "span": [10, 23, 25, 26], "max_": [10, 28], "sigma_n": 10, "cond": [10, 14, 15, 19, 28, 29], "view": 10, "data": [10, 14, 15, 19, 20, 29], "mean": [10, 17, 18, 21, 24, 29], "w": [10, 18, 25, 26], "maxim": 10, "weight": [10, 18], "x_k": [10, 23, 28], "perp": [10, 23, 24, 25, 26], "_j": [10, 23, 25], "captur": [10, 18], "ie": [10, 15, 18, 30], "varianc": [10, 18], "_p": [10, 18, 28], "sigma_p": 10, "entir": [10, 27], "p_k": [10, 15, 16, 29, 31], "sigma_k": 10, "t_k": [10, 14, 15, 16, 29, 31], "obtain": [10, 30], "remov": 10, "sigma_": 10, "expect": [10, 29], "rrrrrrr": [10, 29], "don": 10, "just": [10, 17, 30], "tx": 10, "24x": 10, "80": 10, "20": [10, 13, 17, 19, 21], "digit": 10, "dataset": [10, 20], "sklearn": [10, 18], "1797": [10, 18], "64": [10, 18], "pixel": [10, 18], "handwritten": [10, 18], "10": [10, 12, 13, 14, 15, 17, 18, 20, 22, 27, 29, 31], "reshap": [10, 15, 18, 20], "like": 10, "color": 10, "3s": 10, "horizont": [10, 19], "interest": 10, "observ": [10, 28], "4s": 10, "opposit": 10, "7s": 10, "cong": 10, "c_m": [10, 27], "minimum": [10, 24, 28], "altogeth": 10, "i_r": 10, "p_r": 10, "want": [10, 15, 17, 24, 29], "multipli": [10, 30], "everyth": 10, "out": [10, 28], "p_rp_r": 10, "bq": 10, "outer": 10, "truncat": [10, 31], "a_k": [10, 16, 20, 21, 29, 31], "side": [10, 23, 31], "corrupt": 10, "nois": [10, 14, 15, 17, 20], "hat": [10, 12, 20], "directli": [10, 30], "compos": 10, "error": [10, 12, 17, 20, 24, 31], "unrel": 10, "sens": [10, 25, 28], "mostli": 10, "avoid": [10, 19, 20], "amplifi": 10, "deblur": 10, "tomographi": 10, "14": [10, 12, 15, 29], "switch": 10, "chang": [10, 14, 15, 28, 29], "delta": [10, 28], "pseudo": 10, "a_2": [10, 16, 29, 31], "min": 10, "advanc": 11, "build": [11, 17], "concept": 11, "techniqu": 11, "introduc": [11, 14, 16, 31], "235": 11, "intro": 11, "particularli": 11, "qr": 11, "svd": [11, 18], "coursework": 11, "mix": 11, "spectral": 11, "theori": 11, "jordan": 11, "emphas": 11, "applic": 11, "variou": [11, 23], "problem": [11, 20, 24, 28], "includ": [11, 18, 24, 27], "least": [11, 17], "fit": 11, "fast": 11, "dynam": 11, "cover": 11, "eigenpair": 11, "iter": 11, "method": [11, 17, 21, 24, 29, 30], "etc": 11, "summar": [11, 23], "perform": [11, 30], "mathemat": [11, 12], "softwar": [11, 26], "scipi": [11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26, 31], "jupyt": 11, "under": [11, 27, 28], "creativ": 11, "common": [11, 17, 24], "attribut": 11, "noncommerci": 11, "sharealik": 11, "intern": 11, "numpi": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "la": [12, 13, 14, 15, 16, 17, 18, 19, 21, 22], "matplotlib": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "pyplot": [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], "creat": [12, 13, 14, 19, 27], "function": [12, 13, 15, 17, 18, 19, 21, 24, 26, 28, 31], "learn": [12, 18], "packag": [12, 18], "print": [12, 13, 14, 17, 21], "type": [12, 20, 30], "ndarrai": [12, 20], "16666667": 12, "33333333": 12, "66666667": [12, 21], "due": 12, "round": [12, 29], "exact": [12, 16, 31], "residu": [12, 24], "220446049250313e": 12, "16": [12, 21, 29, 31], "cccccccc": 12, "2r": 12, "constant": [12, 30], "model": 12, "parallel": 12, "circuilt": 12, "loop": 12, "current": 12, "i_1": 12, "i_n": 12, "a1": [12, 13], "ey": [12, 13], "a2": [12, 13], "diag": [12, 13, 16, 19, 20], "ones": [12, 13, 16, 17, 19, 30], "xlabel": [12, 14], "ylabel": 12, "amp": 12, "linalg": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 26, 31], "partial": [13, 30], "pivot": [13, 30], "than": [13, 29], "own": 13, "return": 13, "warn": 13, "messag": 13, "def": 13, "copi": [13, 22], "track": 13, "rang": [13, 14, 18, 20, 21, 29], "check": [13, 19], "continu": [13, 15, 29], "remain": 13, "move": [13, 30, 31], "success": 13, "try": [13, 14], "along": [13, 30], "onemor": 13, "rrrrr": [13, 24, 29, 30, 31], "solve_triangular": 13, "imshow": [13, 18, 19, 20], "cmap": [13, 18, 19, 20], "rdbu": 13, "clim": [13, 18], "colorbar": [13, 18, 19], "lower": [13, 30], "grid": [13, 14, 15, 16, 18, 22], "ylim": 13, "60": [13, 29], "y_0": [14, 15, 17, 29, 31], "t_d": [14, 29], "y_d": [14, 29], "c_0": [14, 17, 24, 29], "c_d": [14, 17, 29], "y_k": [14, 15, 16, 23, 29, 31], "c_k": [14, 16, 29, 31], "c_1t_1": [14, 29], "y_1": [14, 16, 17, 23, 24, 27, 29, 30, 31], "c_1t_2": 14, "t_2": [14, 24, 29], "y_2": [14, 16, 24, 27, 29, 30, 31], "c_1t_d": [14, 29], "vandermond": [14, 17, 29], "parabola": 14, "vander": 14, "cubic": 14, "polyniomi": 14, "linspac": [14, 15, 16, 17], "markers": [14, 15], "condit": [14, 16, 19, 26, 27, 29, 31], "nmax": 14, "append": 14, "figur": [14, 18, 19, 20, 22], "figsiz": [14, 18, 20, 22], "titl": [14, 22], "115575244": 14, "59700233": 14, "len": 14, "nice": 14, "005": [14, 15], "randn": [14, 15, 17, 18, 19, 21], "200": [14, 15, 18, 19, 20], "sensit": [14, 15, 28, 29], "cubicsplin": 15, "y_n": [15, 16, 17, 23, 29, 30, 31], "piecewis": [15, 29], "p_1": [15, 16, 25, 29, 31], "p_2": [15, 25, 29], "p_n": [15, 16, 29, 31], "subinterv": [15, 29], "smooth": [15, 31], "530258040767464": 15, "t1": 15, "y1": 15, "cs1": 15, "bc_type": 15, "t2": 15, "y2": 15, "randint": [15, 20], "cs2": 15, "ad": 15, "t3": 15, "y3": 15, "cs3": 15, "differenti": 16, "boundari": [16, 31], "t_f": [16, 31], "kh": [16, 31], "rearrang": [16, 28, 30, 31], "llet": 16, "r_k": [16, 21, 31], "rrcrr": [16, 31], "r_": [16, 31], "t0": 16, "tf": 16, "concaten": 16, "axi": [16, 18], "none": 16, "ordinari": [16, 31], "b_k": [16, 29, 31], "2q_k": [16, 31], "c_": [16, 29, 30, 31], "a_n": [16, 29, 31], "2y": [16, 31], "19": [16, 21, 29, 31], "line": [17, 23, 24, 27], "c_1t": [17, 31], "best": [17, 24], "quantifi": [17, 24, 28], "minim": [17, 24], "sse": [17, 24], "sum_i": [17, 24], "y_i": [17, 24], "t_i": [17, 24, 29], "express": [17, 27], "vert": [17, 24], "q_1r_1": [17, 26], "thin": [17, 24, 26], "q_1": [17, 24, 26], "base": [17, 26], "epsilon": 17, "arbitrari": 17, "choic": [17, 29], "goal": 17, "demonstr": 17, "retriev": 17, "coefficeint": 17, "c0": 17, "c1": 17, "500": [17, 22], "scatter": [17, 18], "lw": [17, 18], "column_stack": [17, 18], "correct": 17, "97304298": 17, "20916319": 17, "17889211": 17, "68281135": 17, "97091058": 17, "04278627": 17, "07311395": 17, "almost": 17, "exactli": [17, 31], "ts": 17, "ys": 17, "linewidth": 17, "idea": 17, "c_2t": [17, 24], "c_dt": 17, "befor": 17, "cd_d": 17, "c_1x": 17, "c_2x": 17, "c2": 17, "1000": 17, "q1": 17, "r1": 17, "mode": 17, "econom": 17, "averag": 18, "locat": [18, 30], "origin": [18, 23, 27], "seek": 18, "singular": [18, 20, 28], "qt": [18, 20], "8650194": 18, "50173841": 18, "quiver": 18, "xy": 18, "scale_unit": 18, "scale": [18, 30], "machin": 18, "implement": [18, 21], "pca": 18, "load_digit": 18, "been": 18, "flatten": 18, "select": 18, "1056": 18, "binari": [18, 19], "interpol": 18, "gaussian": 18, "normliz": 18, "x2d": 18, "target": 18, "cm": 18, "get_cmap": 18, "jet": 18, "tick": 18, "io": [19, 20], "loadmat": [19, 20], "set_cmap": 19, "640x480": 19, "ax": 19, "a_c": 19, "a_r": 19, "256": 19, "o": 19, "block": [19, 21], "arang": [19, 22], "ac": 19, "24782": 19, "33104255917": 19, "record": [19, 30], "kitten": 19, "imread": 19, "jpg": 19, "astyp": 19, "float64": 19, "grai": 19, "01": [19, 21], "x1": 19, "x2": 19, "pseudoinvers": [19, 20], "pc": 19, "sc": 19, "qtc": 19, "pr": 19, "sr": 19, "qtr": 19, "dc_k_plu": 19, "hstack": 19, "dr_k_plu": 19, "ac_k_plu": 19, "ar_k_plu": 19, "spars": 20, "sla": 20, "tomograph": 20, "rai": 20, "walnut": 20, "wa": 20, "prepar": 20, "finnish": 20, "societi": 20, "ct": 20, "mat": 20, "file": 20, "These": 20, "save": 20, "memori": 20, "nbyte": 20, "7762752": 20, "9840": 20, "6724": 20, "csc": 20, "csc_matrix": 20, "subplot": [20, 22], "proj": [20, 24, 25, 26], "82": 20, "spy": 20, "120": 20, "78720": 20, "b_e": 20, "a_k_plu": 20, "bone": 20, "provid": [20, 26, 29], "fip": 20, "eignvalu": 21, "paus": 21, "x0": 21, "niter": 21, "nxk": 21, "format": 21, "xk": 21, "sleep": 21, "72413793": 21, "68965517": 21, "70710681": 21, "70710675": 21, "rayleigh": 21, "quotient": 21, "41421356": 21, "eig": 21, "eval": 21, "evec": 21, "00000000e": 21, "07106781e": 21, "91354351e": 21, "inde": 21, "tild": 21, "lu_factor": 21, "lu_solv": 21, "50000002": 21, "70710678": 21, "49999998": 21, "tb": 21, "150": 21, "379": 21, "6129147900905": 21, "6149599542561": 21, "pretti": 21, "good": 21, "a_0": 21, "q_k": [21, 31], "thei": [21, 23, 26], "na": 21, "ak": 21, "nak": 21, "77302319e": 21, "33333333e": 21, "76358907e": 21, "40000000e": 21, "41421356e": 21, "23313981e": 21, "41176471e": 21, "88235294e": 21, "02": 21, "52409613e": 21, "11764706e": 21, "41379310e": 21, "43829925e": 21, "36886114e": 21, "13793103e": 21, "38617379e": 21, "39797215e": 21, "45293347e": 21, "24650102e": 21, "14213562e": 21, "ipython": 22, "displai": 22, "rcparam": 22, "default": 22, "y_angl": 22, "1e": 22, "phase": 22, "k1": 22, "k2": 22, "750": 22, "k3": 22, "1100": 22, "rate": 22, "your": 22, "browser": 22, "support": 22, "y_filter": 22, "x_filter": 22, "ifft": 22, "x_1y_1": 23, "x_ny_n": 23, "rule": 23, "furthermor": [23, 25, 30], "acut": 23, "radian": 23, "90": 23, "pythagorean": 23, "theorem": [23, 24], "subseteq": [23, 25, 27], "u_2": 23, "plane": [23, 27], "Is": [23, 27, 28], "possibl": [23, 31], "No": 23, "cap": 23, "replac": 23, "suffici": 23, "revers": 23, "nulliti": 23, "l_1": [23, 29], "l_2": [23, 29], "rrrrrr": [23, 29], "distanc": [24, 25], "nearest": [24, 25], "nonsingular": [24, 28], "decomopsit": 24, "futhermor": 24, "q_2": [24, 26], "deomposit": 24, "pythagora": 24, "depend": [24, 29], "t_m": 24, "y_m": 24, "regress": 24, "t_j": [24, 29], "simpl": [24, 31], "f_1": 24, "sai": 24, "necessarili": 24, "f_2": 24, "_u": 25, "gram": 25, "schmidt": 25, "projector": [25, 26], "complement": [25, 26], "closest": 25, "p_1p_2": 25, "p_2p_1": 25, "shortest": 25, "rotat": 26, "reflect": 26, "thing": 26, "2p": 26, "matlab": 26, "document": 26, "lapack": 26, "hyperplan": 27, "close": 27, "addit": 27, "scalar": [27, 30], "long": 27, "colinear": 27, "u_m": 27, "trivial": 27, "sometim": 27, "echelon": [27, 30], "abc": 27, "euclidean": 28, "assign": [28, 30], "turn": 28, "mani": [28, 29, 30, 31], "triangl": 28, "inequ": 28, "familiar": 28, "ball": 28, "unless": 28, "explicitli": 28, "frobeniu": 28, "_f": 28, "satisi": 28, "min_": 28, "stretch": 28, "reciproc": 28, "max_i": 28, "clear": 28, "nontrivi": 28, "convent": 28, "circl": 28, "bound": 28, "infinit": [29, 30], "wherea": 29, "much": [29, 31], "flexibl": 29, "impos": [29, 31], "constraint": 29, "ensur": 29, "meaning": 29, "_d": 29, "fix": 29, "phi_k": 29, "phi_0": 29, "phi_d": 29, "monomi": 29, "c_1t_0": 29, "27": 29, "20mm": [29, 30], "reus": 29, "3t": 29, "4t": 29, "larger": 29, "d_k": 29, "four": 29, "4n": 29, "specifi": [29, 31], "endpoint": [29, 31], "y_": [29, 30, 31], "natur": 29, "knot": 29, "l_k": 29, "3l": 29, "2l": 29, "6l": 29, "l_n": 29, "6l_n": 29, "a_4": 29, "b_4": 29, "c_4": 29, "thefor": 29, "3a_k": 29, "2b_k": 29, "6a_k": 29, "2b_": 29, "6a_3": 29, "2b_3": 29, "2b_4": 29, "3a_3": 29, "c_3": 29, "6a_4": 29, "2b_5": 29, "li": 29, "t_3": 29, "p_3": 29, "drastic": 29, "30": 29, "y_3": [29, 30, 31], "unspecifi": 29, "decim": 29, "place": 29, "93": 29, "55": 29, "56": 29, "65": 29, "37": 29, "24": [29, 30, 31], "69": 29, "b_5": 29, "18": [29, 31], "c_5": 29, "36": 29, "78": 29, "d_5": 29, "t_4": [29, 31], "t_5": 29, "t_6": 29, "t_7": 29, "subsitut": 30, "ccccccccc": 30, "b_m": 30, "known": 30, "variabl": 30, "three": 30, "interchang": 30, "bottom": 30, "symbol": 30, "review": 30, "inconsist": 30, "free": 30, "ea": 30, "dure": 30, "pair": 30, "shown": 30, "allow": 30, "plu": 30, "permut": 30, "advantag": 30, "ell_": 30, "especi": 30, "ae": 30, "l_0u_0": 30, "l_0": 30, "deriv": [30, 31], "ld": 30, "du_0": 30, "imposs": 31, "involv": 31, "highest": 31, "appear": 31, "taylor": 31, "center": 31, "central": 31, "2h": 31, "2y_k": 31, "rrrrrrcrrrrcc": 31, "2y_1": 31, "2y_2": 31, "2y_3": 31, "y_4": 31, "2y_": 31, "2y_n": 31, "formul": 31, "08": 31, "integr": 31, "twice": 31, "notic": 31, "y_5": 31, "principl": 31, "higher": 31, "accuraci": 31, "rrrrcrrrrcc": 31, "a_ny_": 31, "b_ny_n": 31, "rrrrrrcrrrrrrcc": 31, "never": 31, "19554177": 31, "35872678": 31, "ty": 31, "hint": 31}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"gaussian": [0, 30], "elimin": [0, 30], "matrix": [1, 20, 28], "multipl": 1, "solv": [2, 12], "special": 2, "matric": [2, 19, 21, 26], "diagon": [2, 9], "upper": 2, "triangular": 2, "backward": [2, 30], "substitut": [2, 30], "lower": 2, "forward": [2, 30], "complex": 3, "vector": [3, 23, 25, 28], "convolut": 4, "filter": [4, 22], "discret": [5, 22], "fourier": [5, 6, 22], "transform": [5, 6, 22], "root": 5, "uniti": 5, "basi": [5, 27], "exercis": [5, 6, 7, 8, 9, 10, 23, 24, 25, 26, 27, 28, 29, 30, 31], "fast": 6, "frequenc": 7, "amplitud": 7, "phase": 7, "sinusoid": [7, 22], "dft": 7, "stemplot": 7, "comput": [8, 20, 21, 22], "eigenvalu": [8, 9, 21], "power": [8, 21], "method": [8, 16, 31], "rayleigh": 8, "quotient": 8, "invers": [8, 21], "iter": [8, 21], "pagerank": 8, "eigenvector": 9, "spectral": 9, "theorem": [9, 25, 27], "singular": 10, "valu": 10, "decomposit": [10, 13, 17, 26, 30], "svd": [10, 19, 20], "construct": 10, "corollari": 10, "princip": [10, 18], "compon": [10, 18], "analysi": [10, 18, 28], "pseudoinvers": 10, "least": [10, 24], "squar": [10, 24], "expans": 10, "math": 11, "545": 11, "appli": 11, "linear": [11, 12, 17, 27], "algebra": 11, "descript": 11, "learn": 11, "goal": 11, "licens": 11, "system": 12, "equat": [12, 17, 24, 31], "exampl": [12, 13, 14, 15, 16, 17, 22], "A": [12, 20], "mathbf": 12, "x": 12, "b": 12, "scipi": 12, "linalg": 12, "resistor": 12, "network": 12, "lu": [13, 30], "implement": 13, "polynomi": [14, 17, 29], "interpol": [14, 15, 29], "1": [14, 15, 16], "2": [14, 15, 16], "3": [14, 15, 16], "4": 14, "natur": 15, "cubic": [15, 29], "spline": [15, 29], "finit": [16, 31], "differ": [16, 31], "fit": [17, 24], "model": [17, 24], "data": [17, 18, 24], "regress": 17, "normal": [17, 24], "qr": [17, 21, 24, 26], "fake": [17, 18], "noisi": 17, "quadrat": 17, "2d": 18, "digit": 18, "dataset": 18, "deblur": 19, "imag": 19, "blur": 19, "toeplitz": 19, "invert": 19, "nois": 19, "truncat": [19, 20], "tomographi": 20, "measur": 20, "sinogram": 20, "project": [20, 25, 26], "solut": 20, "true": 20, "random": 21, "fft": 22, "plai": 22, "audio": 22, "signal": 22, "orthogon": [23, 25, 26], "complement": 23, "subspac": [23, 27], "fundament": 23, "approxim": 24, "definit": 24, "onto": 25, "base": 25, "subpsac": 25, "gram": 26, "schmidt": 26, "independ": 27, "span": 27, "dimens": 27, "nullspac": 27, "rang": 27, "rank": 27, "nulliti": 27, "error": 28, "norm": 28, "condit": 28, "number": 28, "rel": 28, "function": 29, "differenti": 31, "second": 31, "order": 31}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})