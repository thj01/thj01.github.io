import numpy as np
import matplotlib.pyplot as plt

plt.axis([-10,10,-10,10])
x = np.arange(-10,10,0.01)

plt.plot(x, x,"r--")
plt.plot(x, -x,"g-.")
plt.plot(x,-pow(x,2)+4,"b--")

plt.grid(True)
plt.title('Linier med tegn 1')

plt.show()
	
