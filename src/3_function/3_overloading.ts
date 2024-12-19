/**
 * overloading
 */
/**
 * 파라미터를 하나를 받거나
 * 세개를 받는 함수
 */

function stringOrStrings(member: string) : string
function stringOrStrings(member1: string, member2:string, member3:string) : string

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 입력값을 하나의 스트링으로 입력받는다
 * ex- 'str1, str2, str3'
 *
 * 세개의 파라미터를 받는다면
 * 각각의 파라미터로 받는다
 * ex- 'str','str1', 'str2'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?:string) {
    if(member2 && member3) {
        return `member: ${memberOrMembers}, ${member2}, ${member3}`;
    } else {
        return `member: ${memberOrMembers}`;
    }
}

console.log(stringOrStrings('kim, lee, park'));
console.log(stringOrStrings('kim', 'lee', 'park'));