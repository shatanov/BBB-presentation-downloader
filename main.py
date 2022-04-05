import requests


def parser():
    for i in range(1, 1000):
        response = requests.get(
            "https://bbb205.ssau.ru/bigbluebutton/presentation/3054cc5405b916145c7e173df12776e6144deba2-1648623481602/3054cc5405b916145c7e173df12776e6144deba2-1648623481602/ea6be83ee6d49cfe0e0318a98975673ae92917cb-1648623626761/svg/" + str(
                i))
        if response.status_code != 404:
            out = open("photo/img" + str(i) + ".svg", "wb")
            out.write(response.content)
            out.close()
        else: return


if __name__ == '__main__':
    parser()


