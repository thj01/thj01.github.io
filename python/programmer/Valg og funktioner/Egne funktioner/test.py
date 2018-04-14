##importeret for at kunne plotte funktionen.

import numpy as np
import matplotlib.pyplot as plt

#plotfunktionen

x = np.arange(-3,+3, 0.01)

plt.plot(x,100*x**2-400, color='r')
plt.plot(x,2*pow(0.2,x), color='g')
plt.plot(x,100*x+25, color='b')
plt.grid(True)
plt.xlabel('Definitionsmængde')
plt.ylabel('Værdimængde')
plt.title('Blandede funktioner')

plt.show()
