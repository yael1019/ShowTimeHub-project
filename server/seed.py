from app import app, bcrypt
from models import db, User, Watch, Video
from faker import Faker 
import random

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        User.query.delete()
        Watch.query.delete()
        Video.query.delete()

        print('Start Seeding!')

        users = []
        for _ in range(40):
            first = fake.first_name()
            last = fake.last_name()
            email = fake.ascii_email()
            password = bcrypt.generate_password_hash('Password123').decode('utf-8')
            user = User(
                first, 
                last,
                email,
                password
            )
            users.append(user)
        db.session.add_all(users)

        videos = []
        v1 = Video (
            title='Manifest',
            category='Drama',
            year=2018,
            type='Show',
            rating=5,
            description= 'When a plane mysteriously lands years after takeoff, the people onboard return to a world that has moved on without them and face strange new realities.',
            image='https://m.media-amazon.com/images/M/MV5BZjllMzc1ZTAtMzYyYi00OWU4LTgzNTAtYWJmMWNhZDI3ODVjXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg',
            url='https://www.youtube.com/embed/I1hNAIzkQWY'
        )
        v2 = Video (
            title='Selling Sunset',
            category='Reality TV',
            year=2019,
            type='Show',
            rating=4,
            description= 'The elite agents at The Oppenheim Group sell the luxe life to affluent buyers in LA. Relationships are everything, and that often means major drama.',
            image='https://m.media-amazon.com/images/M/MV5BZTdhM2Y1ZTItOTA0Zi00ZWVjLWExYzUtNDMzNWFhN2Q1MGQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
            url='https://www.youtube.com/embed/qlRsOWkzFgM'
        )
        v3 = Video (
            title='YOU',
            category='Thrillers',
            year=2018,
            type='Show',
            rating=4,
            description= 'A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.',
            image='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQdQ9ake-jkZuan2QJSGIELMOysGUvHevg0-zbqDSaQugn2zlsVmLheJc7D-xlxe-bQ4WrCUXFHgpQsOvl8bIhOD2b3fcy9unf6BcdY49bEHezKmQ2zpTHOsoMht5RIb_CQxVCzC1YxP4AIqKZCjO2LDB.jpg?r=46f',
            url='https://www.youtube.com/embed/lY55ig5js6I'
        )
        v4 = Video (
            title='Mean Girls',
            category='Comedy',
            year=2004,
            type='Movie',
            rating=5,
            description= 'After being home-schooled abroad, new student Cady gets a crash course in high school life when popular clique the Plastics invites her to sit with them.',
            image='https://pbs.twimg.com/media/FeJ0De-VIAA6zdP.jpg:large',
            url='https://www.youtube.com/embed/EMzEmGfTuM4'
        )
        v5 = Video (
            title='The Mother',
            category='Drama, Action & Adventure',
            year=2023,
            type='Movie',
            rating=3,
            description= 'A military-trained assassin comes out of hiding to protect the daughter she\'s never met from ruthless criminals gunning for revenge.',
            image='https://m.media-amazon.com/images/M/MV5BODlmZThjZGItOGRmMC00ODVjLWIzYWMtODBhYzQyZjE4NWE5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg',
            url='https://www.youtube.com/embed/8BFdFeOS3oM'
        )
        v6 = Video (
            title='Flash',
            category='Sci-Fi TV',
            year=2014,
            type='Show',
            rating=4,
            description= 'A forensics expert who wakes from a coma with amazing new powers squares off against forces threatening the city in this live-action superhero romp.',
            image='https://m.media-amazon.com/images/M/MV5BZDcwMzU4NWYtODIzZi00Yzg4LWJhOTAtOTQ2ZDA4NmFlYmFlXkEyXkFqcGdeQXVyMTY1MTU3NDY5._V1_.jpg',
            url='https://www.youtube.com/embed/IgVyroQjZbE'
        )
        v7 = Video (
            title='Love Is Blind',
            category='Reality TV',
            year=2020,
            type='Show',
            rating=3,
            description= 'Nick and Vanessa Lachey host this social experiment where single men and women look for love and get engaged, all before meeting in person.',
            image='https://m.media-amazon.com/images/M/MV5BNmRiMjVjYzgtZDk4Ny00MGRlLWJjYWUtNTk4ZmUxYWY1N2Y1XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg',
            url='https://www.youtube.com/embed/s2eBAFt3L_0'
        )
        v8 = Video (
            title='Missing',
            category='Drama',
            year=2023,
            type='Movie',
            rating=4,
            description= 'When June\'s mother and her new boyfriend don\'t return from a trip to Colombia, the tech-savvy teenager undertakes her own online investigation.',
            image='https://i.ytimg.com/vi/XCsTWyggFwE/movieposter_en.jpg',
            url='https://www.youtube.com/embed/seBixtcx19E'
        )
        v9 = Video (
            title='Ted',
            category='Comdey',
            year=2012,
            type='Movie',
            rating=2,
            description= 'A hard-partying, foul-mouthed teddy bear come to life threatens to derail his human companion\'s attempts to enter adulthood and marry his girlfriend.',
            image='https://assets.nflxext.com/us/boxshots/hd1080/70218756.jpg',
            url='https://www.youtube.com/embed/9fbo_pQvU7M'
        )
        v10 = Video (
            title='Originals',
            category='Drama',
            year=2013,
            type='Show',
            rating=5,
            description= 'The Mikaelsons move to New Orleans and form an alliance with local witches in an effort to rule the city once again in this "Vampire Diaries" spinoff.',
            image='https://www.tvguide.com/a/img/catalog/provider/1/1/1-6018506677.jpg',
            url='https://www.youtube.com/embed/A7o5b-K4V40'
        )
        v11 = Video (
            title='The Witcher',
            category='Fantasy',
            year=2019,
            type='Show',
            rating=5,
            description= 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
            image='https://www.gamespot.com/a/uploads/original/1562/15626911/3611989-elcck2hxyaaa5mb.jpg',
            url='https://www.youtube.com/embed/ndl1W4ltcmg'
        )
        v12 = Video (
            title='Always Be My Maybe',
            category='Comedy',
            year=2019,
            type='Movie',
            rating=4,
            description= 'Reunited after 15 years, famous chef Sasha and hometown musician Marcus feel the old sparks of attraction but struggle to adapt to each other\'s worlds.',
            image='https://upload.wikimedia.org/wikipedia/en/5/5d/Always_Be_My_Maybe_poster.png',
            url='https://www.youtube.com/embed/iHBcWHY9lN4'
        )
        v13 = Video (
            title='Bullet Train',
            category='Action & Adventure',
            year=2022,
            type='Movie',
            rating=4,
            description= 'Five assassins board a Japanese bullet train bound for Kyoto and come to discover that their seemingly separate missions are mysteriously linked.',
            image='https://occ-0-6-7.1.nflxso.net/dnm/api/v6/oQyw8Fv9eE41UPapt7zHvdUdzrE/AAAABSXv4l8iSGZVtHBLL45vQ2Bga8y7nRQU5WbDDRikKFnmmfRRsAaYUmuJhhr46Eg6bDnB4Eh7jpqAGLRKDha-XO30dXw7oJ4rJRPA.jpg',
            url='https://www.youtube.com/embed/0IOsk2Vlc4o'
        )
        v14 = Video (
            title='Lucifer',
            category='Drama',
            year=2016,
            type='Show',
            rating=5,
            description= 'Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.',
            image='https://resizing.flixster.com/PYMILH2RwjmJ3uCZyBAEDihOIG4=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI3OTYxMS53ZWJw',
            url='https://www.youtube.com/embed/X4bF_quwNtw'
        )
        videos.append(v1)
        videos.append(v2)
        videos.append(v3)
        videos.append(v4)
        videos.append(v4)
        videos.append(v5)
        videos.append(v6)
        videos.append(v7)
        videos.append(v8)
        videos.append(v9)
        videos.append(v10)
        videos.append(v11)
        videos.append(v12)
        videos.append(v13)

        db.session.add_all(videos)

        watched = []
        for _ in range(40):
            watch = Watch(
                1,
                random.randint(1, 40),
                random.randint(1, 13)
            )
            watched.append(watch)
        
        db.session.add_all(watched)

        db.session.commit()

        print('Done Seeding!')
        