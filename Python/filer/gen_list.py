

print('<line x1="420" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:4" />')

for i in range(0,360,30):
    print(f'<line x1="420" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:4" transform="rotate({i},225,225)" />')

print('<line x1="420" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:2" />')
for i in range(0,360,6):
    if i%30 != 0:
        print(f'<line x1="435" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:2" transform="rotate({i},225,225)" />')

print('<line x1="420" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:2" />')
for i in range(0,360,3):
    if i%6 !=0:
        print(f'<line x1="440" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:1" transform="rotate({i},225,225)" />')
        
for i in range(0,720,3):
    if (i/2)%3 !=0:
        i = i/2
        print(f'<line x1="444" y1="225" x2="450" y2="225" style="stroke:rgba(255,255,255,1);stroke-width:1" transform="rotate({i},225,225)" />')