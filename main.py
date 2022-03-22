import requests

def parser():
    for i in range(1, 1000):
        response = requests.get(
            "https://bbb209.ssau.ru/bigbluebutton/presentation/af5bce74099e83601eef9aaa04363150faac917e-1647967370646/af5bce74099e83601eef9aaa04363150faac917e-1647967370646/a2dcc06f8c55aadb43521709d5b1421890ada168-1647967454445/svg/" + str(
                i))
        if response.status_code != 404:
            out = open("photo/img" + str(i) + ".svg", "wb")
            out.write(response.content)
            out.close()
        else: return



if __name__ == '__main__':
    parser()


