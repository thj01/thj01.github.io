<<<<<<< HEAD
import tkinter as tk

class Application(tk.Frame):
    def __init__(self, master=None):
        super().__init__(master)
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Hello World\n(click me)"
        self.hi_there["command"] = self.say_hi
        self.hi_there.pack(side="top")

        self.quit = tk.Button(self, text="QUIT", fg="red",
                              command=root.destroy)
        self.quit.pack(side="bottom")

    def say_hi(self):
        print("hi there, everyone!")

root = tk.Tk()
app = Application(master=root)
app.mainloop()
=======
import random

enkelt_ord = "aften"

midter_bogstaver = enkelt_ord[1:-1]

print(midter_bogstaver)

liste = []

	
for char in midter_bogstaver:	
	
	liste.append (char)

n = 0
	
for i in liste:
	
	n +=1
	
	liste_rest = liste[1:]

	
	if n < len(liste):
	

		liste_rest_shuffle = random.shuffle(liste_rest)
		
		print(liste_rest[0])
		
		del liste_rest[0]
		
		
	else:
		
		print(liste_rest[0])
		
	liste = liste_rest.append(liste[:1])



print(liste_rest)

>>>>>>> 15ead93df63af4b6e1a3123078976cb672c0c259
