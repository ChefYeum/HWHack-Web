import json
import pyautogui

with open('output.json') as json_file:
    data = json.load(json_file)
    # print(data)
    while True:
        for d in data:
            type = d['type']
            args = d['args']
            if type == "mouse_moveTo":
                x = int(args[0])
                y = int(args[1])
                dur = int(args[2])
                print("Moving mouse to (" + str(x) + ", " + str(y) + ") over " + str(dur) + " seconds" )
                pyautogui.moveTo(x, y, duration=dur)
            elif type == "mouse_move":
                x = int(args[0])
                y = int(args[1])
                dur = int(args[2])
                print("Moving mouse relatively by (" + str(x) + ", " + str(y) + ") over " + str(dur) + " seconds" )
                pyautogui.moveRel(x, y, duration=dur)
            elif type == "mouse_click":
                print("cliking " + args[0] + " button")
                pyautogui.click(button=args[0])
            elif type == "mouse_scroll":
                amt = int(args[1])
                if args[0] == "down":
                    amt = -amt
                print("scrolling by " + str(amt) + " clicks")
                pyautogui.scroll(amt)
            elif type == "mouse_dragTo":
                x = int(args[0])
                y = int(args[1])
                dur = int(args[2])
                print("Dragging mouse to (" + str(x) + ", " + str(y) + ") over " + str(dur) + " seconds" )
                pyautogui.dragTo(x, y, dur, button='left')
            elif type == "mouse_drag":
                x = int(args[0])
                y = int(args[1])
                dur = int(args[2])
                print("Dragging mouse relatively by (" + str(x) + ", " + str(y) + ") over " + str(dur) + " seconds" )
                pyautogui.drag(x, y, dur, button='left')
