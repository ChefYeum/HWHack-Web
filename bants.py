import pyautogui
import time

time.sleep(3)
y_pixels = 726
width = 3
for x in range(0, width):
	for i in range(0, y_pixels):
		pyautogui.press('space')
		pyautogui.press('down')
		print("pressing space and down")
	pyautogui.press('left')
	for i in range(0, y_pixels):
		pyautogui.press('space')
		pyautogui.press('up')
	pyautogui.press('left')
