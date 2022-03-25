import requests


def parser():
    for i in range(1, 1000):
        response = requests.get(
            "https://bbb204.ssau.ru/bigbluebutton/presentation/3054cc5405b916145c7e173df12776e6144deba2-1648018738727/3054cc5405b916145c7e173df12776e6144deba2-1648018738727/1eb5bdfe69e45de7ff010183b79c2e5bd8a7e16f-1648018782866/svg/" + str(
                i))
        if response.status_code != 404:
            out = open("photo/img" + str(i) + ".svg", "wb")
            out.write(response.content)
            out.close()
        else: return


if __name__ == '__main__':
    parser()


