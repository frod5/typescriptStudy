/**
 * name space
 * 이젠 거의 사용하지않는다.
 * 완전 레거시 프로젝트에서 많이 사용
 */
namespace Home {
    class Model {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    export const model = new Model('kim', 30)
}

namespace Post {
    class User {
        email: string;
        name: string

        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }

    // new Model(); // 접근 불가
    const admin = new User('xxx@naver.com', Home.model.name)  // export한것은 접근
    console.log(admin)
}

namespace Comment {
    const name = 'comment';

    namespace Detail {
        const page = 'detail';
        console.log(name)
        console.log(page)
    }

    console.log('----------------')
    console.log(name)
    // console.log(page) 접근 불가.
}