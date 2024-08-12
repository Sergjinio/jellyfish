(function() {var type_impls = {
"jf_plonk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CanonicalDeserialize-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-CanonicalDeserialize-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; CanonicalDeserialize for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_with_mode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.deserialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_with_mode</a>&lt;R&gt;(\n    reader: R,\n    compress: Compress,\n    validate: Validate,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section></summary><div class='docblock'>The general deserialize method that takes in customization flags.</div></details><section id=\"method.deserialize_compressed\" class=\"method trait-impl\"><a href=\"#method.deserialize_compressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_compressed</a>&lt;R&gt;(reader: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_compressed_unchecked\" class=\"method trait-impl\"><a href=\"#method.deserialize_compressed_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_compressed_unchecked</a>&lt;R&gt;(\n    reader: R,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_uncompressed\" class=\"method trait-impl\"><a href=\"#method.deserialize_uncompressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_uncompressed</a>&lt;R&gt;(reader: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_uncompressed_unchecked\" class=\"method trait-impl\"><a href=\"#method.deserialize_uncompressed_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_uncompressed_unchecked</a>&lt;R&gt;(\n    reader: R,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section></div></details>","CanonicalDeserialize","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CanonicalSerialize-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-CanonicalSerialize-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; CanonicalSerialize for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_with_mode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.serialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_with_mode</a>&lt;W&gt;(\n    &amp;self,\n    writer: W,\n    compress: Compress,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section></summary><div class='docblock'>The general serialize method that takes in customization flags.</div></details><section id=\"method.serialized_size\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.serialized_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialized_size</a>(&amp;self, compress: Compress) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.serialize_compressed\" class=\"method trait-impl\"><a href=\"#method.serialize_compressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_compressed</a>&lt;W&gt;(&amp;self, writer: W) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section><section id=\"method.compressed_size\" class=\"method trait-impl\"><a href=\"#method.compressed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">compressed_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.serialize_uncompressed\" class=\"method trait-impl\"><a href=\"#method.serialize_uncompressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_uncompressed</a>&lt;W&gt;(&amp;self, writer: W) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section><section id=\"method.uncompressed_size\" class=\"method trait-impl\"><a href=\"#method.uncompressed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">uncompressed_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.usize.html\">usize</a></h4></section></div></details>","CanonicalSerialize","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-Clone-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Pairing,\n    &lt;E as Pairing&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-Debug-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Pairing,\n    &lt;E as Pairing&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-Default-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + Pairing,\n    &lt;E as Pairing&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-PartialEq-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Pairing,\n    &lt;E as Pairing&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.1/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","jf_plonk::proof_system::structs::CommitKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Valid-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-Valid-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; Valid for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.check\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, SerializationError&gt;</h4></section><section id=\"method.batch_check\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#method.batch_check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">batch_check</a>&lt;'a&gt;(\n    batch: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.1/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;: 'a,</div></h4></section></div></details>","Valid","jf_plonk::proof_system::structs::CommitKey"],["<section id=\"impl-Eq-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-Eq-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + Pairing,\n    &lt;E as Pairing&gt;::G1Affine: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","jf_plonk::proof_system::structs::CommitKey"],["<section id=\"impl-StructuralPartialEq-for-UnivariateProverParam%3CE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/jf_pcs/univariate_kzg/srs.rs.html#39\">source</a><a href=\"#impl-StructuralPartialEq-for-UnivariateProverParam%3CE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"jf_pcs/univariate_kzg/srs/struct.UnivariateProverParam.html\" title=\"struct jf_pcs::univariate_kzg::srs::UnivariateProverParam\">UnivariateProverParam</a>&lt;E&gt;<div class=\"where\">where\n    E: Pairing,</div></h3></section>","StructuralPartialEq","jf_plonk::proof_system::structs::CommitKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()