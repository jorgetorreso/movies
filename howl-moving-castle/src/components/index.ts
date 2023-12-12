const files = import.meta.glob('./*.tsx', { as: 'raw', eager: true })
export default files;