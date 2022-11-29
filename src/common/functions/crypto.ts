import { createHash, randomBytes } from 'node:crypto';

const hash = function(raw: string){
	const sha256 = createHash('sha256');
	const hash = sha256.update(raw).digest('base64');
	return hash;
}, hashCompare = (raw: string, hashed: string) => hash(raw) === hashed
, randomString = (bytesCount: number = 16) => randomBytes(bytesCount).toString('hex');

export {
	hash,
	hashCompare,
	randomString
}