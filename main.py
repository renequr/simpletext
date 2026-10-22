TimeVAR = 0
SysFRQ = 0
MsgSTR = 0

def on_pin_touch_p1():
    global TimeVAR, SysFRQ
    TimeVAR = 1
    SysFRQ += -1
    radio.set_group(SysFRQ)
    while TimeVAR == 1:
        basic.show_number(SysFRQ)
        basic.pause(500)
        TimeVAR = 0
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
input.on_pin_touch_event(TouchPin.P1, input.button_event_down(), on_pin_touch_p1)

def on_button_a():
    pass
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    pass
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

def on_pin_touch_p0():
    global MsgSTR
    MsgSTR += -1
input.on_pin_touch_event(TouchPin.P0, input.button_event_down(), on_pin_touch_p0)

def on_pin_touch_p2():
    global TimeVAR, SysFRQ
    TimeVAR = 1
    SysFRQ += 1
    radio.set_group(SysFRQ)
    while TimeVAR == 1:
        basic.show_number(SysFRQ)
        basic.pause(500)
        TimeVAR = 0
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
input.on_pin_touch_event(TouchPin.P2, input.button_event_down(), on_pin_touch_p2)

def on_pin_touch_p3():
    global MsgSTR
    MsgSTR += 1
input.on_pin_touch_event(TouchPin.P3, input.button_event_down(), on_pin_touch_p3)
