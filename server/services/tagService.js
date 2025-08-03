import { Tag } from "../models/tag";
import slugify from "slugify";

async function FindOrCreateTags(tags) {
    let tagIds = await Promise.all(
        tags.map(async (name) => {
            let tag = await Tag.findOne({ name });
            if (!tag) {
                tag = Tag.create({ name, slug: slugify(name) });
            }
            return tag._id;
        })
    );
    return tagIds;
}

export { FindOrCreateTags };
