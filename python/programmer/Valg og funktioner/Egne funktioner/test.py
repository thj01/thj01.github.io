import numpy as np
import matplotlib.pyplot as plt

plt.axis([-10,10,-10,10])
x = np.arange(-10,10,0.01)

plt.plot(x, x-7,"r--")
plt.plot(x, x-5,"-.")

plt.plot(x, x-3,".")

plt.grid(True)

plt.title('Linier')
plt.xlabel('x-akse (Definitionsmængde)')
plt.ylabel('y-akse (Værdimængde)')

plt.show()
