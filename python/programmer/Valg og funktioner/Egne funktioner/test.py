import numpy as np
import matplotlib.pyplot as plt

kategorier = ["gruppe a", "gruppe b", "gruppe c", "gruppe d"]
værdier = [5, 20, 17, 12]

plt.plot(kategorier, værdier, "ro", markersize=5)
plt.title('Prik diagram')
plt.show()
