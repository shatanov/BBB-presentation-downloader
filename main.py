import requests


def parser():
    for i in range(1, 1000):
        response = requests.get(
            "" + str(
                i))
        if response.status_code != 404:
            out = open("photo/img" + str(i) + ".svg", "wb")
            out.write(response.content)
            out.close()
        else: return


if __name__ == '__main__':
    parser()


