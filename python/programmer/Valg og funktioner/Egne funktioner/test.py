import numpy as np
import matplotlib.pyplot as plt

textstr = 'NSE=%.2f\nRMSE=%.2f\n'%(1, 2)
plt.xlim(2002, 2008)
plt.ylim(0, 4500)
# print textstr
plt.text(2000, 2000, textstr, fontsize=14)
plt.grid(True)
plt.subplots_adjust(right=.5)
plt.show()
